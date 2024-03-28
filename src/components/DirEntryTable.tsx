import './DirEntryTable.css';

import { formatBytes, formatUnixTimestamp } from '../utils';
import { Button } from './index';
import { EntryMetadata } from '../types';

export interface DirEntryTableProps {
  entries: EntryMetadata[];
}

export const DirEntryTable = ({ entries }: DirEntryTableProps) => {
  return (
    <table className='dir-entry-table'>
      <thead>
        <tr>
          <th>
            <Button kind='flat'>Name</Button>
          </th>
          <th className='date'>
            <Button kind='flat'>Created</Button>
          </th>
          <th className='date'>
            <Button kind='flat'>Modified</Button>
          </th>
          <th className='size'>
            <Button kind='flat'>Size</Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {entries.map((e) => <DirEntryTableRow {...e} />)}
      </tbody>
    </table>
  );
};

const DirEntryTableRow = (
  { basename, created, size, modified }: EntryMetadata,
) => {
  return (
    <tr>
      <td>{basename}</td>
      <td className='date'>{formatUnixTimestamp(created)}</td>
      <td className='date'>{formatUnixTimestamp(modified)}</td>
      <td className='size'>{formatBytes(size)}</td>
    </tr>
  );
};

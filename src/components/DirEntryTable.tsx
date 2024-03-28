import './DirEntryTable.css';

import { formatBytes } from '../utils';
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
          <th data-col-type='size'>
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

const DirEntryTableRow = ({ basename, size }: EntryMetadata) => {
  return (
    <tr>
      <td>{basename}</td>
      <td>{formatBytes(size)}</td>
    </tr>
  );
};

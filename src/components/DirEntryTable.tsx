import './DirEntryTable.css';

import { formatBytes, formatUnixTimestamp } from '../utils';
import { Button } from './index';
import { EntryMetadata } from '../types';

export interface DirEntryTableProps {
  entries?: EntryMetadata[];
  onEntryClick?: (entry: EntryMetadata) => void;
  disabled?: boolean;
}

export const DirEntryTable = (
  { entries = [], disabled = false, onEntryClick = () => {} }:
    DirEntryTableProps,
) => {
  const tableRows = entries.map((e) => {
    return (
      <DirEntryTableRow
        entry={e}
        onClick={() => onEntryClick(e)}
      />
    );
  });

  return (
    <table className={`dir-entry-table ${disabled ? 'disabled' : ''}`}>
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
        {tableRows}
      </tbody>
    </table>
  );
};

export interface DirEntryTableRowProps {
  entry: EntryMetadata;
  onClick: React.MouseEventHandler<HTMLTableRowElement>;
}

const DirEntryTableRow = (
  { entry, onClick }: DirEntryTableRowProps,
) => {
  const { basename, created, size, modified } = entry;

  return (
    <tr onClick={onClick}>
      <td>{basename}</td>
      <td>{formatUnixTimestamp(created)}</td>
      <td>{formatUnixTimestamp(modified)}</td>
      <td>{formatBytes(size)}</td>
    </tr>
  );
};

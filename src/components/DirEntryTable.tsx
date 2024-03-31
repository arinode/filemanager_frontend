import './DirEntryTable.css';

import { formatBytes, formatUnixTimestamp } from '../utils';
import { Button } from './index';
import { EntryMetadata } from '../types';

type EntryField = 'basename' | 'size' | 'created' | 'modified';

export interface DirEntryTableProps {
  entries?: EntryMetadata[];
  onEntryClick?: (entry: EntryMetadata) => void;
  disabled?: boolean;
  visibleFields?: EntryField[];
}

export const DirEntryTable = (
  {
    entries = [],
    disabled = false,
    onEntryClick = () => {},
    visibleFields = ['basename', 'size', 'modified'],
  }: DirEntryTableProps,
) => {
  const tableRows = entries.map((e) => {
    return (
      <DirEntryTableRow
        entry={e}
        onClick={() => onEntryClick(e)}
        visibleFields={visibleFields}
      />
    );
  });

  const thBasename = (
    <th>
      <Button kind='flat'>Name</Button>
    </th>
  );

  const thCreated = (
    <th className='date'>
      <Button kind='flat'>Created</Button>
    </th>
  );

  const thModified = (
    <th className='date'>
      <Button kind='flat'>Modified</Button>
    </th>
  );

  const thSize = (
    <th className='size'>
      <Button kind='flat'>Size</Button>
    </th>
  );

  return (
    <table className={`dir-entry-table ${disabled ? 'disabled' : ''}`}>
      <thead>
        <tr>
          {visibleFields.includes('basename') ? thBasename : null}
          {visibleFields.includes('created') ? thCreated : null}
          {visibleFields.includes('modified') ? thModified : null}
          {visibleFields.includes('size') ? thSize : null}
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
  visibleFields: EntryField[];
}

const DirEntryTableRow = (
  { entry, onClick, visibleFields }: DirEntryTableRowProps,
) => {
  const { basename, created, size, modified } = entry;

  return (
    <tr onClick={onClick}>
      {visibleFields.includes('basename') ? <td>{basename}</td> : null}
      {visibleFields.includes('created')
        ? <td>{formatUnixTimestamp(created)}</td>
        : null}
      {visibleFields.includes('modified')
        ? <td>{formatUnixTimestamp(modified)}</td>
        : null}
      {visibleFields.includes('size') ? <td>{formatBytes(size)}</td> : null}
    </tr>
  );
};

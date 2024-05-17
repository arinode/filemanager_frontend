import './DirEntryTable.css';

import { formatBytes, formatUnixTimestamp } from '../utils';
import { Button } from './index';
import { EntryMetadata } from '../types';
import { useMemo, useState } from 'react';

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
  const [sortingField, setSortingField] = useState('basename');
  const [sortAscending, setSortAscending] = useState(true);

  const tableRows = useMemo(() => {
    const sortedEntries = entries.toSorted((a, b) => {
      const fieldA = a[sortingField];
      const fieldB = b[sortingField];

      let order = (() => {
        if (typeof fieldA === 'string') {
          return fieldA.localeCompare(fieldB);
        }

        if (fieldA < fieldB) {
          return -1;
        }
        if (fieldA > fieldB) {
          return 1;
        }
        return 0;
      })();

      if (!sortAscending) {
        order = order * -1;
      }

      return order;
    });

    return sortedEntries.map((e) => {
      return (
        <DirEntryTableRow
          entry={e}
          onClick={() => onEntryClick(e)}
          visibleFields={visibleFields}
        />
      );
    });
  }, [entries, sortingField, sortAscending]);

  const handleThClick = (field: string) => {
    setSortingField(field);
    setSortAscending(!sortAscending);
  };

  const thBasename = (
    <th>
      <Button
        kind='flat'
        onClick={() => handleThClick('basename')}
      >
        Name
      </Button>
    </th>
  );

  const thCreated = (
    <th className='date'>
      <Button kind='flat' onClick={() => handleThClick('created')}>
        Created
      </Button>
    </th>
  );

  const thModified = (
    <th className='date'>
      <Button
        kind='flat'
        onClick={() => handleThClick('modified')}
      >
        Modified
      </Button>
    </th>
  );

  const thSize = (
    <th className='size'>
      <Button kind='flat' onClick={() => handleThClick('size')}>Size</Button>
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

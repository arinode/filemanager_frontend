import DirEntry from '../direntry';
import { formatBytes } from '../utils';
import Button from './Button';
import './DirEntryTable.css';

export interface DirEntryTableProps {
  entries: DirEntry[];
}

function DirEntryTableRow({ name, size }: DirEntry) {
  return (
    <tr>
      <td>{name}</td>
      <td>{formatBytes(size)}</td>
    </tr>
  );
}

export default function DirEntryTable({ entries }: DirEntryTableProps) {
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
}

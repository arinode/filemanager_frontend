import './FileBrowserEntry.css';
import DirEntry from './direntry';
import { formatBytes } from './utils';

const FileBrowserEntry = ({ name, size }: DirEntry) => {
  return (
    <div className='file-browser-entry'>
      <p>{name}</p>
      <p>{formatBytes(size)}</p>
    </div>
  );
};

export default FileBrowserEntry;

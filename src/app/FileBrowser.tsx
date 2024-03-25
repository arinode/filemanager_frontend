import './FileBrowser.css';

import { DirEntryTable } from '../components';
import { getTestEntries } from '../direntry';

const FileBrowser = () => {
  return (
    <div className='file-browser'>
      <DirEntryTable entries={getTestEntries(64)} />
    </div>
  );
};

export default FileBrowser;

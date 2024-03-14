import './FileBrowser.css'
// import FileBrowserEntry from './FileBrowserEntry'
import DirEntryTable from './components/DirEntryTable';
import { getTestEntries } from './direntry';

function FileBrowser() {
    return (
        <div className="file-browser">
            <DirEntryTable entries={getTestEntries(64)} />
        </div>
    )
}

export default FileBrowser

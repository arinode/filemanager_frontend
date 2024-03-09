import './FileBrowser.css'
import FileBrowserEntry from './FileBrowserEntry'
import { getTestEntries } from './direntry';

function FileBrowser() {
    const entries = getTestEntries(256).map((e) => <FileBrowserEntry {...e} />);

    return (
        <div className="file-browser">
            <div className="file-browser-entries">
                {entries}
            </div>
        </div>
    )
}

export default FileBrowser

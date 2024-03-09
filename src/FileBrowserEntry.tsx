import './FileBrowserEntry.css'
import DirEntry from './direntry'

function FileBrowserEntry({ name, size }: DirEntry) {
    return (
        <div className='file-browser-entry'>
            <p>{name}</p>
            <p>{size}</p>
        </div>
    )
}

export default FileBrowserEntry

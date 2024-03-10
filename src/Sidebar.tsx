import './Sidebar.css'
import SidebarFade from './SidebarFade'

function Sidebar({ collapsed, onSidebarFadeClick }) {
    return (
        <>
            <SidebarFade isHidden={collapsed} onClick={onSidebarFadeClick} />
            <aside className='sidebar' data-collapsed={collapsed}>
                <button>New/Upload</button>
                <nav>
                    <button>Downloads</button>
                    <button>Music</button>
                    <button>Images</button>
                    <button>Videos</button>
                    <button>Documents</button>
                </nav>
                <nav>
                    <button>Storage 1</button>
                    <button>Storage 2</button>
                    <button>Storage 3</button>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar

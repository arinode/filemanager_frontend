import './Sidebar.css'
import SidebarFade from './SidebarFade'
import Button from './components/Button'

function Sidebar({ collapsed, onSidebarFadeClick }) {
    return (
        <>
            <SidebarFade isHidden={collapsed} onClick={onSidebarFadeClick} />
            <aside className='sidebar' data-collapsed={collapsed}>
                <Button kind="primary">New/Upload</Button>
                <nav>
                    <Button>Downloads</Button>
                    <Button>Music</Button>
                    <Button>Images</Button>
                    <Button>Videos</Button>
                    <Button>Documents</Button>
                </nav>
                <nav>
                    <Button>Storage 1</Button>
                    <Button>Storage 2</Button>
                    <Button>Storage 3</Button>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar

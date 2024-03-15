import './Sidebar.css';
import SidebarFade from './SidebarFade';
import Button from './components/Button';
import HorizontalRule from './components/HorizontalRule';

const Sidebar = ({ collapsed, onSidebarFadeClick }) => {
  return (
    <>
      <SidebarFade isHidden={collapsed} onClick={onSidebarFadeClick} />
      <aside className='sidebar' data-collapsed={collapsed}>
        <Button kind='flat'>New/Upload</Button>
        <HorizontalRule />
        <nav>
          <Button kind='flat'>Downloads</Button>
          <Button kind='flat'>Music</Button>
          <Button kind='flat'>Images</Button>
          <Button kind='flat'>Videos</Button>
          <Button kind='flat'>Documents</Button>
        </nav>
        <HorizontalRule />
        <nav>
          <Button kind='flat'>Storage 1</Button>
          <Button kind='flat'>Storage 2</Button>
          <Button kind='flat'>Storage 3</Button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

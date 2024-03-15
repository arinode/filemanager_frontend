import './SidebarFade.css';

const SidebarFade = ({ isHidden, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='sidebar-fade'
      style={isHidden ? { display: 'none' } : {}}
    >
    </div>
  );
};

export default SidebarFade;

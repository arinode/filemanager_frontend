import './SidebarFade.css'

function SidebarFade({ isHidden, onClick }) {
	return (
		<div onClick={onClick} className="sidebar-fade" style={isHidden ? { display: "none" } : {}}></div>
	)
}

export default SidebarFade

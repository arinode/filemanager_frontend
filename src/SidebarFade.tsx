import './SidebarFade.css'

function SidebarFade({ active, onClick }) {
	return (
		<div onClick={onClick} className="sidebar-fade" style={active ? { display: "none" } : {}}></div>
	)
}

export default SidebarFade

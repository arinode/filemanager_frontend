import "./Header.css"

function Header({ onSidebarButtonClick }) {
    return (
        <header>
            <button onClick={onSidebarButtonClick}>Show sidebar</button>
            <input type="search" placeholder="Search"></input>
        </header>
    )
}

export default Header

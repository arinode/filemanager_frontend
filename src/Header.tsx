import "./Header.css"
import TextInput from "./components/TextInput"

function Header({ onSidebarButtonClick }) {
    return (
        <header>
            <button onClick={onSidebarButtonClick}>Show sidebar</button>
            <TextInput placeholder="Search" onInput={(e) => console.log(e)} />
        </header>
    )
}

export default Header

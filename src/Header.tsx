import "./Header.css"
import Button from "./components/Button"
import TextInput from "./components/TextInput"

function Header({ onSidebarButtonClick }) {
    return (
        <header>
            <Button onClick={onSidebarButtonClick}>Show sidebar</Button>
            <TextInput placeholder="Search" onInput={(e) => console.log(e)} />
        </header>
    )
}

export default Header

import './Header.css';
import Button from './components/Button';
import TextInput from './components/TextInput';

const Header = ({ onSidebarButtonClick }) => {
  return (
    <header>
      <Button kind='flat' onClick={onSidebarButtonClick}>Show sidebar</Button>
      <TextInput placeholder='Search' onInput={(e) => console.log(e)} />
    </header>
  );
};

export default Header;

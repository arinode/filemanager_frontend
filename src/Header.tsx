import './Header.css';
import Button from './components/Button';
import TextInput from './components/TextInput';

const Header = ({ onSidebarButtonClick, isSidebarButtonVisible }) => {
  const style = isSidebarButtonVisible ? {} : { display: 'none' };

  return (
    <header>
      <Button kind='flat' style={style} onClick={onSidebarButtonClick}>
        Show sidebar
      </Button>
      <TextInput placeholder='Search' onChange={(e) => console.log(e)} />
    </header>
  );
};

export default Header;

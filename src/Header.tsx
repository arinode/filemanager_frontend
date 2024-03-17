import { useState } from 'react';
import './Header.css';
import Button from './components/Button';
import TextInput from './components/TextInput';

const Header = ({ onSidebarButtonClick, isSidebarButtonVisible }) => {
  const style = isSidebarButtonVisible ? {} : { display: 'none' };
  const [query, setQuery] = useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setQuery(e.target.value);
  };

  return (
    <header>
      <Button kind='flat' style={style} onClick={onSidebarButtonClick}>
        Show sidebar
      </Button>
      <TextInput placeholder='Search' onChange={onSearchChange} value={query} />
    </header>
  );
};

export default Header;

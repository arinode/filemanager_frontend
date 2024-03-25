import { useState } from 'react';
import './Header.css';
import { Button, TextInput, useUIShellWithSidebarContext } from '../components';

const Header = () => {
  const { isNarrowScreen, setIsSidebarToggled } =
    useUIShellWithSidebarContext();

  const style = isNarrowScreen ? {} : { display: 'none' };
  const [query, setQuery] = useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <Button
        kind='flat'
        style={style}
        onClick={() => {
          setIsSidebarToggled(true);
        }}
      >
        Show sidebar
      </Button>
      <TextInput placeholder='Search' onChange={onSearchChange} value={query} />
    </header>
  );
};

export default Header;

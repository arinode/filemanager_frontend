import './App.css';
import Sidebar from './components/Sidebar';
import Header from './Header';
import Toolbar from './Toolbar';
import FileBrowser from './FileBrowser';
import { useState } from 'react';
import Button from './components/Button';
import HorizontalRule from './components/HorizontalRule';
import { useWatchMediaQuery } from './utils';

const App = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const isNarrowScreen = useWatchMediaQuery('(max-width: 90ch)');

  if (isNarrowScreen === false && isSidebarToggled) {
    setIsSidebarToggled(false);
  }

  return (
    <>
      <Sidebar
        isBroken={isNarrowScreen}
        isToggled={isSidebarToggled}
        onBackdropClick={() => setIsSidebarToggled(false)}
      >
        <Button kind='flat'>New/Upload</Button>
        <HorizontalRule />
        <nav>
          <Button kind='flat'>Downloads</Button>
          <Button kind='flat'>Music</Button>
          <Button kind='flat'>Images</Button>
          <Button kind='flat'>Videos</Button>
          <Button kind='flat'>Documents</Button>
        </nav>
        <HorizontalRule />
        <nav>
          <Button kind='flat'>Storage 1</Button>
          <Button kind='flat'>Storage 2</Button>
          <Button kind='flat'>Storage 3</Button>
        </nav>
      </Sidebar>
      <div className='filemanager-wrapper'>
        <Header
          isSidebarButtonVisible={isNarrowScreen}
          onSidebarButtonClick={() => setIsSidebarToggled(true)}
        />
        <main>
          <Toolbar />
          <FileBrowser />
        </main>
      </div>
    </>
  );
};

export default App;

import './App.css';
import Header from './Header';
import Toolbar from './Toolbar';
import FileBrowser from './FileBrowser';
import Button from './components/Button';
import HorizontalRule from './components/HorizontalRule';
import UIShellWithSidebar from './components/UIShellWithSidebar';

const App = () => {
  const sidebarChildren = (
    <>
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
    </>
  );

  const mainChildren = (
    <>
      <Header />
      <main>
        <Toolbar />
        <FileBrowser />
      </main>
    </>
  );

  return (
    <>
      <UIShellWithSidebar
        sidebarChildren={sidebarChildren}
        mainChildren={mainChildren}
      >
      </UIShellWithSidebar>
    </>
  );
};

export default App;

import './App.css';

import FileBrowser from './FileBrowser';
import Header from './Header';
import Toolbar from './Toolbar';
import { Button, HorizontalRule, UIShellWithSidebar } from '../components';
import { Provider } from 'react-redux';
import { store } from './store';

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
      <Provider store={store}>
        <Header />
        <main>
          <Toolbar />
          <FileBrowser />
        </main>
      </Provider>
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

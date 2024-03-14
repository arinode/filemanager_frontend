import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Toolbar from './Toolbar';
import FileBrowser from './FileBrowser';
import { useState } from 'react';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <>
      <Sidebar
        collapsed={isSidebarCollapsed}
        onSidebarFadeClick={() => setIsSidebarCollapsed(true)}
      />
      <div className='filemanager-wrapper'>
        <Header onSidebarButtonClick={() => setIsSidebarCollapsed(false)} />
        <main>
          <Toolbar />
          <FileBrowser />
        </main>
      </div>
    </>
  );
}

export default App;

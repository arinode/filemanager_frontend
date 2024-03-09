import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Toolbar from './Toolbar'
import FileBrowser from './FileBrowser'

function App() {
    return (
        <>
            <Sidebar />
            <div id="filemanager-wrapper">
                <Header />
                <main>
                    <Toolbar />
                    <FileBrowser />
                </main>
            </div>
        </>
    )
}

export default App

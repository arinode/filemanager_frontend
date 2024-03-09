import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Toolbar from './Toolbar'

function App() {
    return (
        <>
            <Sidebar />
            <div id="filemanager-wrapper">
                <Header />
                <main>
                    <Toolbar />
                </main>
            </div>
        </>
    )
}

export default App

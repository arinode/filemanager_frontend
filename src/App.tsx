import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Toolbar from './Toolbar'

function App() {
    return (
        <>
            <Sidebar />
            <div id="filemanager-wrapper">
                <Header></Header>
                <main>
                    <Toolbar></Toolbar>
                </main>
            </div>
        </>
    )
}

export default App

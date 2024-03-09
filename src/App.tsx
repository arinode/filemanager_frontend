import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'

function App() {
    return (
        <>
            <Sidebar />
            <div id="filemanager-wrapper">
                <Header></Header>
                <main></main>
            </div>
        </>
    )
}

export default App

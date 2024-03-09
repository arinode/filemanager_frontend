import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'

function App() {
    return (
        <>
            <Sidebar />
            <div id="filemanager-wrapper">
                <header></header>
                <main></main>
            </div>
        </>
    )
}

export default App

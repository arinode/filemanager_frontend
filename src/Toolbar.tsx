import './Toolbar.css'

function Toolbar() {
    return (
        <div id="toolbar">
            <nav>home user Downloads</nav>
            <menu>
                <li><button>New directory</button></li>
                <li><button>Change view</button></li>
                <li><button>More utils</button></li>
            </menu>
        </div>
    )
}

export default Toolbar

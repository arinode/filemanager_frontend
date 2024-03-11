import './Toolbar.css'
import Breadcrumbs from './components/Breadcrumbs'
import Button from './components/Button'

function Toolbar() {
    return (
        <div className="toolbar">
            <Breadcrumbs />
            <menu>
                <li><Button>New directory</Button></li>
                <li><Button>Change view</Button></li>
                <li><Button>More utils</Button></li>
            </menu>
        </div>
    )
}

export default Toolbar

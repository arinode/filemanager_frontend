import './Breadcrumbs.css'

export interface BreadcrumbsProps {

}

export default function Breadcrumbs() {
    return (
        <nav className='breadcrumbs' aria-label='breadcrumbs'>
            <ol>
                <li><a>home</a></li>
                <li><a>user</a></li>
                <li><a aria-current="location">Downloads</a></li>
            </ol>
        </nav>
    )
}

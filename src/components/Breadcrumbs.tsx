import { useParams } from 'react-router-dom';
import './Breadcrumbs.css';

export interface BreadcrumbsProps {
}

export const Breadcrumbs = () => {
  const path = useParams()['*'] ?? '';
  const components = Array.from(path.split('/').entries()); // .entries().map() is still experimetal

  return (
    <nav className='breadcrumbs' aria-label='breadcrumbs'>
      <ol>
        {
        components.map(([i, c]) => {
          if (i === components.length - 1) {
            return <a aria-current='location'>{c}</a>;
          }

          return <a>{c}</a>;
        })
        .map((link) => <li>{link}</li>)
      }
      </ol>
    </nav>
  );
};

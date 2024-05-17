import { Link, useParams } from 'react-router-dom';
import './Breadcrumbs.css';

export interface BreadcrumbsProps {
}

export const Breadcrumbs = () => {
  let path = useParams()['*'] ?? '';
  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  const components = Array.from(path.split('/').entries()); // .entries().map() is still experimetal

  return (
    <nav className='breadcrumbs' aria-label='breadcrumbs'>
      <ol>
        <Crumb text='/' link='/dirs/' />
        {components.map(([i, c]) => {
          const isCurrent = i === components.length - 1;

          return <Crumb text={c} link='' isCurrent={isCurrent} />;
        })}
      </ol>
    </nav>
  );
};

export interface CrumbProps {
  text: string;
  link: string;
  isCurrent?: boolean;
}

export const Crumb = ({ text, link, isCurrent }: CrumbProps) => {
  return (
    <li>
      <Link to={link} {...(isCurrent ? { 'aria-current': 'location' } : null)}>
        {text}
      </Link>
    </li>
  );
};

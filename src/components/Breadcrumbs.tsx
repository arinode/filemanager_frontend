import { Link, useNavigate, useParams } from 'react-router-dom';
import './Breadcrumbs.css';
import { Button } from './Button';

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
          const url = new URL(
            '../'.repeat(components.length - i - 1),
            window.location.href,
          );

          return <Crumb text={c} link={url.pathname} isCurrent={isCurrent} />;
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
  const navigate = useNavigate();

  return (
    <li>
      <Button
        onClick={() => navigate(link)}
        kind='flat'
        {...(isCurrent ? { 'aria-current': 'location' } : null)}
      >
        {text}
      </Button>
    </li>
  );
};

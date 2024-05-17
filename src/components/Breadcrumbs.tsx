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
    <a href={link} {...(isCurrent ? { 'aria-current': 'location' } : null)}>
      {text}
    </a>
  );
};

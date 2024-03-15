import './Toolbar.css';
import Breadcrumbs from './components/Breadcrumbs';
import Button from './components/Button';

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <Breadcrumbs />
      <menu>
        <li>
          <Button kind='flat'>New directory</Button>
        </li>
        <li>
          <Button kind='flat'>Change view</Button>
        </li>
        <li>
          <Button kind='flat'>More utils</Button>
        </li>
      </menu>
    </div>
  );
};

export default Toolbar;

import './Toolbar.css';

import { Breadcrumbs, Button } from '../components';

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <div className='horizontal-scroll'>
        <Breadcrumbs />
      </div>
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

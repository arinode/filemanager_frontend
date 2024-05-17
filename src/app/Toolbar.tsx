import './Toolbar.css';

import { Breadcrumbs, Button } from '../components';

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <div className='horizontal-scroll'>
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default Toolbar;

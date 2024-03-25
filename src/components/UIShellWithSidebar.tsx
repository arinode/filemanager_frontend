import './UIShellWithSidebar.css';

import { useState } from 'react';
import {
  Sidebar,
  UIShellWithSidebarContext,
  UIShellWithSidebarContextProps,
} from './index';
import { useWatchMediaQuery } from '../utils';

export interface UIShellWithSidebarProps {
  sidebarChildren: React.ReactElement;
  mainChildren: React.ReactElement;
}

export const UIShellWithSidebar = (
  { sidebarChildren, mainChildren }: UIShellWithSidebarProps,
) => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const isNarrowScreen = useWatchMediaQuery('(max-width: 90ch)');

  const context: UIShellWithSidebarContextProps = {
    isSidebarToggled,
    setIsSidebarToggled,
    isNarrowScreen,
  };

  return (
    <div className='ui-shell-with-sidebar'>
      <UIShellWithSidebarContext.Provider value={context}>
        <Sidebar
          isToggled={isSidebarToggled}
          isBroken={isNarrowScreen}
          onBackdropClick={() => {
            setIsSidebarToggled(false);
          }}
        >
          {sidebarChildren}
        </Sidebar>
        <div className='ui-shell-with-sidebar-content'>
          {mainChildren}
        </div>
      </UIShellWithSidebarContext.Provider>
    </div>
  );
};

import Button from './Button';
import './Sidebar.css';
import { ReactNode } from 'react';

export interface SidebarProps {
  children: ReactNode;
  isToggled?: boolean;
  onBackdropClick?: () => void;
  isBroken?: boolean;
}

const Sidebar = (
  { children, isToggled = false, onBackdropClick, isBroken = false }:
    SidebarProps,
) => {
  return (
    <div
      className='sidebar-wrapper'
      data-broken={isBroken}
      data-toggled={isToggled}
    >
      <Button
        kind='transparent'
        className='sidebar-backdrop'
        onClick={onBackdropClick}
      >
        Hide sidebar
      </Button>
      <aside className='sidebar'>{children}</aside>
    </div>
  );
};

export default Sidebar;

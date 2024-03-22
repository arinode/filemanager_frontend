import { Button } from './index';
import './Sidebar.css';
import { ReactNode, useEffect, useRef } from 'react';

export interface SidebarProps {
  children: ReactNode;
  isToggled?: boolean;
  onBackdropClick?: () => void;
  isBroken?: boolean;
}

export const Sidebar = (
  { children, isToggled = false, onBackdropClick, isBroken = false }:
    SidebarProps,
) => {
  const backdropRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isBroken && isToggled) {
      backdropRef.current!.focus();
    }
  }, [isToggled, isBroken]);

  return (
    <div
      className='sidebar-wrapper'
      data-broken={isBroken}
      data-toggled={isToggled}
    >
      <Button
        ref={backdropRef}
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

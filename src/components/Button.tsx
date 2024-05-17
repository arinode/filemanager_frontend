import './Button.css';

import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  kind?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'flat'
    | 'transparent';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}

export const Button = forwardRef(({
  children,
  className = '',
  kind = 'secondary',
  onClick = (e) => {
    alert(
      'this feature is not yet implemented; this app is a work in progress',
    );
    console.error('onClick handler is not bound', e);
  },
  style,
}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <button
      ref={ref}
      className={`button ${kind} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

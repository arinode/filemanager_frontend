import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react';
import './Button.css';

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
  className,
  kind = 'secondary',
  onClick = (e) => console.error('onClick handler is not bound', e),
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

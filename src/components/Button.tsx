import { CSSProperties, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps {
  children: ReactNode;
  className: string;
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

const Button = ({
  children,
  className,
  kind = 'secondary',
  onClick = (e) => console.error('onClick handler is not bound', e),
  style,
}: ButtonProps) => {
  return (
    <button
      className={`button ${kind} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

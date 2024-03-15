import { ReactNode } from 'react';
import './Button.css';

export interface ButtonProps {
  children: ReactNode;
  kind?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'flat';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  kind = 'secondary',
  onClick = (e) => console.error('onClick handler is not bound', e),
}: ButtonProps) => {
  return (
    <button className={`button ${kind}`} onClick={onClick}>{children}</button>
  );
};

export default Button;

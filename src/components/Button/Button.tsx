import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode; 
  onClick: MouseEventHandler<HTMLButtonElement>; 
  disabled?: boolean; 
}

export const Button : React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

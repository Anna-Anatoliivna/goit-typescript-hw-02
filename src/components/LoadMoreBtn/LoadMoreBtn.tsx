import {  MouseEventHandler, ReactNode } from 'react';
import styles from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
  children: ReactNode; 
  onClick: MouseEventHandler<HTMLButtonElement>; 
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({children, onClick} ) => {
    return (
        <button type="button" onClick={ onClick} className={styles.btn}>
{children}
        </button>
    );
};

import React, { ReactNode } from 'react';
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  children: ReactNode; 
  textAlign?: 'left' | 'center' | 'right'; 
  marginBottom?: '0' | '10' | '20' | '30'; 
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, textAlign = '', marginBottom = '0' }) => {
    return (
       <p
      className={[
        styles['text'],
        styles[textAlign],
        styles[`marginBottom${marginBottom}`],
      ].join(' ')}
    >
      {children}
    </p>
    );
};

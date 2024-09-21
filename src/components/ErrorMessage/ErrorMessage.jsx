import styles from './ErrorMessage.module.css'


export const ErrorMessage = ({ children, textAlign = '', marginBottom = '0' }) => {
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

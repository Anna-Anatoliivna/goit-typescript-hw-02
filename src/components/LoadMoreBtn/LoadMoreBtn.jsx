import styles from './LoadMoreBtn.module.css'


export const LoadMoreBtn = ({children, onClick} ) => {
    return (
        <button type="button" onClick={ onClick} className={styles.btn}>
{children}
        </button>
    );
};

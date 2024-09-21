import styles from './ImageCard.module.css'


export const ImageCard = ({ images, openModal }) => {
    // console.log(images);
    
        return (
        <div>
            <img
                className={styles.img}
                src={images.urls.small}
                alt={images.alt_description}
                onClick={() => openModal(images.urls.regular, images.alt_description)}
            />
            </div>
    );
};

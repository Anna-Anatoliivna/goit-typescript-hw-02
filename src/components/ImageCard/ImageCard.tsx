import { Image } from '../../types';
import styles from './ImageCard.module.css'

interface ImageCardProps {
  images: Image;
  openModal: (url: string, alt: string) => void
}

export const ImageCard: React.FC<ImageCardProps> = ({ images, openModal }) => {
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

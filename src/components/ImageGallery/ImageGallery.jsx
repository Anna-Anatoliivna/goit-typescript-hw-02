import { ImageCard } from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css'


export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.list}>
      {images.map(images => {
        return (
          <li className={styles.item} key={images.id}>
            <ImageCard openModal={openModal} images={images} />
         </li>
        )
      })}
          </ul>
  );
};
                    


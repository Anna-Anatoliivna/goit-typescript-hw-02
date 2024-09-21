
import { Image } from '../../types';
import { ImageCard } from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css'

interface ImageGalleryProps {
  images: Image[];
  openModal: (url: string, alt: string) => void
}

export const ImageGallery : React.FC <ImageGalleryProps> = ({ images, openModal }) => {
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
                    


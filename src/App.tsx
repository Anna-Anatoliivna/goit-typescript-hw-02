import {getImg} from './apiService/imgGallery'
import { useEffect, useRef, useState } from 'react'

import './App.css'
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { ImageModal } from './components/ImageModal/ImageModal';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';
import { Image } from './types';




 const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
   const [images, setImages] = useState<Image[]>([]);
   const [error, setError] = useState<string | null>(null);
   const [isEmpty, setIsEmpty] = useState<boolean>(false);
   const [loader, setLoader] = useState<boolean>(false);
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [showModal, setShowModal] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");
 
   const mainEl = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!query) return;
    

    const fetchImg = async () => {
      setLoader(true);
      try {
        const {
          results,
          total_pages
        } =
        await getImg (query, page);
   if (!results.length) return setIsEmpty(true);   
 setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setLoader(false);
      }
    };
    fetchImg();
    }, [query, page]);

   const onHandleSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsEmpty(false);
   };
   
   const onLoadMore = () : void => {
    setPage((prevPage) => prevPage + 1);
   };
   
   const openModal = (url: string, alt: string) : void => {
    setShowModal(true);
    setModalSrc(url);
    setModalAlt(alt);
  };
  const closeModal = () : void => {
    setShowModal(false);
    setModalSrc("");
    setModalAlt("");
  };
useEffect(() => {
    if (page === 1 || !mainEl.current) return;
    mainEl.current.scrollIntoView({ behavior: "smooth", block: "end" });
}, [images, page]);
   
   useEffect(() => {
     if (isEmpty === false) return;
     toast.error('Sorry. There are no images ... 😭')
   }, [isEmpty])
   
  return (
    <div ref={mainEl}>
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && <ImageGallery openModal={openModal} images={images} />
      }
            {isVisible && !loader && (
        <LoadMoreBtn onClick={onLoadMore} disabled={loader}>
          Load More
        </LoadMoreBtn>
      )}
       {loader && <Loader />}
    
      {error && (
        <ErrorMessage textAlign="center">❌ Sorry. Error accured - {error} </ErrorMessage>
      )}
<ImageModal
        modalIsOpen={showModal}
        src={modalSrc}
        alt={modalAlt}
        closeModal={closeModal}
      />
    </div>
  );
};

export default App

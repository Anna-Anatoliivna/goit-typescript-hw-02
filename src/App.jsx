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

 const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
   const [images, setImages] = useState([]);
   const [error, setError] = useState(null);
   const [isEmpty, setIsEmpty] = useState(false);
   const [loader, setLoader] = useState(false);
   const [isVisible, setIsVisible] = useState(false);
   const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");
 
   const mainEl = useRef();
  
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
      } catch (error) {
        console.log(error);
              setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchImg();
    }, [query, page]);

   const onHandleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsEmpty(false);
   };
   
   const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
   };
   
   const openModal = (url, alt) => {
    setShowModal(true);
    setModalSrc(url);
    setModalAlt(alt);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalSrc("");
    setModalAlt("");
  };
useEffect(() => {
    if (page === 1) return;
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

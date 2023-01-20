import getImages from '../API/Api';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import React from 'react';
import { useState, useEffect } from 'react';
import css from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [totalHits, setTotalHits] = useState('');
  const [showModal, setShowModal] = useState(false);

  const searchForImages = e => {
    e.preventDefault();
    const searchValue = e.target.elements.searchValue.value;
    setImages([]);
    setPage(1);
    setQuery(searchValue);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    try {
      getImages(query, page).then(response => {
        if (!response.data.total) {
          alert("Sorry, there's no such images");
        }
        setImages(images => [...images, ...response.data.hits]);
        setTotalHits(response.data.total);
        setIsLoading(false);
      });
    } catch (error) {
      console.log('Error');
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  const moreImages = () => {
    setPage(prevState => prevState + 1);
  };

  const showModalImage = id => {
    const image = images.find(image => image.id === id);
    setShowModal({
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    });
  };
  const closeModalImage = () => {
    setShowModal(null);
  };

  return (
    <div className={css.App}>
      <SearchBar searchForImages={searchForImages} />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={showModalImage} />
      )}

      {totalHits > images.length && <Button moreImages={moreImages} />}
      {isLoading && <Loader />}
      {showModal && (
        <Modal
          modalImage={showModal.largeImageURL}
          tags={showModal.tags}
          closeModal={closeModalImage}
        />
      )}
    </div>
  );
};

export default App;

import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ modalImage, tags, closeModal }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal]);

  const backdropOnClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={backdropOnClick}>
      <div className={css.Modal}>
        <img src={modalImage} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleKeyPress: PropTypes.func.isRequired,
  backdropOnClick: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;

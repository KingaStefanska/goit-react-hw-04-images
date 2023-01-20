import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(image => (
        <li key={image.id} onClick={onClick} className={css.ImageGalleryItem}>
          <img
            className={css.image}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => onClick(image.id)}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGalleryItem;

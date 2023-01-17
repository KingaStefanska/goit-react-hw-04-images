import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ moreImages }) => {
  return (
    <button type="button" className={css.Button} onClick={() => moreImages()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  moreImages: PropTypes.func.isRequired,
};

export default Button;

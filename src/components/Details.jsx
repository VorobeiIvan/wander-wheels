import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { CloseBtnIcon, MapPinIcon, StarIcon } from './Icons';
import Button from './Button';

const Details = ({
  index,
  campersData,
  data,
  onClose,
  onClick,
  onBackdropClick,
  onEscapeKeyPress,
}) => {
  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <div className="overlay" onClick={onClick} onKeyDown={onEscapeKeyPress}>
      <div className="details-popup">
        <Button
          className="details-close-button"
          onClick={handleClose}
          type={'button'}
        >
          <CloseBtnIcon />
        </Button>

        <div className="details-card-info">
          <h2 className="details-card-title">{campersData[index].name}</h2>
          <div className="details-card-details">
            <div className="details-card-rating-wrapper">
              <StarIcon />
              <p className="details-card-rating-reviews">
                {campersData[index].rating}({campersData[index].reviews.length}
                Reviews)
              </p>
            </div>
            <div className="details-card-location-wrapper">
              <MapPinIcon />
              <p className="details-card-location">
                {campersData[index].location}
              </p>
            </div>
          </div>

          <p className="details-card-price-text">€{campersData[index].price}</p>

          <div className="details-card-container">
            <ul className="details-card-images-list">
              {campersData[index].gallery.map((image, idx) => (
                <li className="details-card-item" key={idx}>
                  <img
                    className="details-card-image"
                    src={image}
                    alt={campersData[index].name}
                  />
                </li>
              ))}
            </ul>
            <p className="details-card-description">
              {campersData[index].description}
            </p>
          </div>
        </div>

        <div className="details-card-link-wrapper">
          <NavLink className="details-card-link" to="/features">
            Features
          </NavLink>
          <NavLink className="details-card-link" to="/reviews">
            Reviews
          </NavLink>
        </div>
        <hr className="details-card-hr" />
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default Details;

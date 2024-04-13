import { Link } from 'react-router-dom';
import Features from './Features';
import Reviews from './Reviews';
import { CloseBtnIcon, MapPinIcon, StarIcon } from './Icons';
import Button from './Button';

const Details = data => {
  const { title, price, location, rating, reviews, image, description } = data;
  return (
    <div className="details-overlay">
      <div className="details-card-wrapper">
        <Button
          className="details-close-button"
          onClick={Details.close}
          type={'button'}
        >
          <CloseBtnIcon />
        </Button>
        <div className="details-card-info">
          <h2 className="details-card-title">{title}</h2>
          <div className="details-card-details">
            <div className="details-card-rating-wrapper">
              <StarIcon />
              <p className="details-card-rating-reviews">
                {rating}({reviews} Reviews)
              </p>
            </div>
            <div className="details-card-location-wrapper">
              <MapPinIcon />
              <p className="details-card-location">{location}</p>
            </div>
          </div>
          <p className="details-card-price-text">{price}</p>
          <ul className="details-card-images">
            {[...Array(3)].map((_, index) => (
              <li key={index}>
                <img className="details-card-image" src={image} alt={title} />
              </li>
            ))}
          </ul>
          <p className="details-card-description">{description}</p>
          <div className="details-card-links-wrapper">
            <Link className="details-card-link active" to={Features}>
              Features
            </Link>
            <Link className="details-card-link" to={Reviews}>
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

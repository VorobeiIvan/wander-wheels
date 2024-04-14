// Details.js
import React from 'react';
import { CloseBtnIcon, MapPinIcon, StarIcon } from './Icons';
import Button from './Button';

const Details = ({ data, onClose }) => {
  const { name, price, rating, reviews, location, description, details } = data;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="details-overlay">
      <div className="details-card-wrapper">
        <Button
          className="details-close-button"
          onClick={handleClose}
          type={'button'}
        >
          <CloseBtnIcon />
        </Button>
        <div className="details-card-info">
          <h2 className="details-card-title">{name}</h2>
          <div className="details-card-details">
            <p className="details-card-price-text">€{price}</p>
            <div className="details-card-rating-wrapper">
              <StarIcon />
              <p className="details-card-rating-reviews">
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <div className="details-card-location-wrapper">
              <MapPinIcon />
              <p className="details-card-location">{location}</p>
            </div>
          </div>
          <p className="details-card-description">{description}</p>
          <ul className="details-card-details-list">
            {Object.entries(details).map(([key, value], index) => (
              <li className="details-card-details-item" key={index}>
                {value ? (
                  <div>
                    <p>{key}</p>
                    <p>{value}</p>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Details.open = data => {
  // Code to open the Details popup with the given data
  console.log('Opening Details:', data);
};

export default Details;

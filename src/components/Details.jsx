import { createPortal } from 'react-dom';
import React, { useState } from 'react';
import { CloseBtnIcon, MapPinIcon, StarIcon } from './Icons';
import Button from './Button';
import { NavLink } from 'react-router-dom';

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

          <ul className="details-card-images-list">
            <li className="details-card-item">
              <img
                className="details-card-image"
                src={campersData[index].gallery[0]}
                alt={campersData[index].name}
              />
            </li>
            <li className="details-card-item">
              <img
                className="details-card-image"
                src={campersData[index].gallery[1]}
                alt={campersData[index].name}
              />
            </li>
            <li className="details-card-item">
              <img
                className="details-card-image"
                src={campersData[index].gallery[2]}
                alt={campersData[index].name}
              />
            </li>
          </ul>
          <p className="details-card-description">
            {campersData[index].description}
          </p>
        </div>

        <NavLink className="details-card-link" to="/features">
          Features
        </NavLink>
        <NavLink className="details-card-link" to="/reviews">
          Reviews
        </NavLink>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default Details;

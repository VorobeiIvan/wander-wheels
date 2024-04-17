import React, { useState, useEffect } from 'react';
import { fetchCampers } from 'utils/api/api';

import Button from './Button';
import Details from './Details';
import { HeartIcon } from './Icons';
import {
  AirConditionerIcon,
  BedsIcon,
  CDIcon,
  FreezerIcon,
  GasIcon,
  HobIcon,
  KitchenIcon,
  MapPinIcon,
  MicrowaveIcon,
  RadioIcon,
  ShowerIcon,
  ShowerWCIcon,
  StarIcon,
  TVIcon,
  ToiletIcon,
  WaterIcon,
} from './Icons';

const Card = ({ data }) => {
  const [campersData, setCampersData] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchCampersData = async () => {
      const data = await fetchCampers();
      setCampersData(data);
    };
    fetchCampersData();
  }, []);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    setIsFavorite(favorites.some(card => card.id === data.id));
  }, [data.id]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];
    const isCardFavorite = favorites.some(card => card.id === data.id);

    if (isCardFavorite) {
      const updatedFavorites = favorites.filter(card => card.id !== data.id);
      localStorage.setItem('favoriteCards', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      const updatedFavorites = [...favorites, data];
      localStorage.setItem('favoriteCards', JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  const openDetails = () => {
    setIsDetailsOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
    document.body.classList.remove('modal-open');
  };

  const handleEscapeKeyPress = event => {
    if (event.key === 'Escape') {
      closeDetails();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeDetails();
    }
  };

  const handleClick = () => {
    if (campersData) {
      openDetails();
    }
  };

  const icons = {
    airConditioner: <AirConditionerIcon />,
    bathroom: <ShowerWCIcon />,
    kitchen: <KitchenIcon />,
    beds: <BedsIcon />,
    TV: <TVIcon />,
    CD: <CDIcon />,
    radio: <RadioIcon />,
    shower: <ShowerIcon />,
    toilet: <ToiletIcon />,
    freezer: <FreezerIcon />,
    hob: <HobIcon />,
    microwave: <MicrowaveIcon />,
    gas: <GasIcon />,
    water: <WaterIcon />,
  };
  const exceptions = ['adults', 'Air conditione', 'hob', 'beds'];
  const { id } = data;
  return (
    <div className="card-wrapper">
      {campersData && (
        <>
          <img
            className="card-image"
            src={campersData[id].gallery[0]}
            alt={campersData[id].name}
          />
          <div className="card-info">
            <div className="card-header-wrapper">
              <h2 className="card-title">{campersData[id].name}</h2>
              <div className="card-price">
                <p className="card-price-text">€{campersData[id].price}</p>
                <Button
                  className={'button-favorite'}
                  onClick={handleFavoriteClick}
                >
                  <HeartIcon
                    className={isFavorite ? 'heart-icon-active' : 'heart-icon'}
                    fill={isFavorite ? '#F43F5E' : 'transparent'}
                    stroke={isFavorite ? '#F43F5E' : '#101828'}
                  />
                </Button>
              </div>
            </div>
            <div className="card-details">
              <div className="card-rating-wrapper">
                <StarIcon />
                <p className="card-rating-reviews">
                  {campersData[id].rating}({campersData[id].reviews.length}
                  Reviews)
                </p>
              </div>
              <div className="card-location-wrapper">
                <MapPinIcon />
                <p className="card-location">{campersData[id].location}</p>
              </div>
            </div>
            <p className="card-description">{campersData[id].description}</p>
            <ul className="card-details-list">
              {Object.entries(campersData[id].details).map(
                ([key, value], id) => (
                  <li className="card-details-item" key={id}>
                    {icons[key]}
                    <p className="card-details-text">
                      {exceptions.includes(key)
                        ? `${value} ${key}`
                        : value <= 1
                        ? key.charAt(0).toUpperCase() + key.slice(1)
                        : key}
                    </p>
                  </li>
                )
              )}
            </ul>

            <Button
              type={'button'}
              className="card-button"
              onClick={handleClick}
            >
              Show more
            </Button>
          </div>
        </>
      )}
      {isDetailsOpen && (
        <Details
          data={data}
          onClose={closeDetails}
          onClick={handleBackdropClick}
          onEscapeKeyPress={handleEscapeKeyPress}
          onBackdropClick={handleBackdropClick}
          campersData={campersData}
          index={id}
        />
      )}
    </div>
  );
};

export default Card;

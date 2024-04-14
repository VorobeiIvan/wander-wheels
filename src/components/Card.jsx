import React, { useState, useEffect } from 'react';
import { fetchCampers } from 'utils/api/api';
import Button from './Button';
import Details from './Details';
import {
  AirConditionerIcon,
  BedsIcon,
  CDIcon,
  FreezerIcon,
  GasIcon,
  HeartIcon,
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
  const [index, setIndex] = useState(0);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    const fetchCampersData = async () => {
      const data = await fetchCampers();
      setCampersData(data);
    };
    fetchCampersData();
  }, []);

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

  return (
    <div className="card-wrapper">
      {campersData && (
        <>
          <img
            className="card-image"
            src={campersData[index].gallery[index]}
            alt={campersData[index].name}
          />
          <div className="card-info">
            <div className="card-header-wrapper">
              <h2 className="card-title">{campersData[index].name}</h2>
              <div className="card-price">
                <p className="card-price-text">€{campersData[index].price}</p>
                <Button className={'button-favorite'}>
                  <HeartIcon />
                </Button>
              </div>
            </div>
            <div className="card-details">
              <div className="card-rating-wrapper">
                <StarIcon />
                <p className="card-rating-reviews">
                  {campersData[index].rating}(
                  {campersData[index].reviews.length} Reviews)
                </p>
              </div>
              <div className="card-location-wrapper">
                <MapPinIcon />
                <p className="card-location">{campersData[index].location}</p>
              </div>
            </div>
            <p className="card-description">{campersData[index].description}</p>
            <ul className="card-details-list">
              {Object.entries(campersData[index].details).map(
                ([key, value], index) => (
                  <li className="card-details-item" key={index}>
                    {icons[key]}
                    <p className="card-details-text">
                      {key}: {value}
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
          index={index}
        />
      )}
    </div>
  );
};

export default Card;

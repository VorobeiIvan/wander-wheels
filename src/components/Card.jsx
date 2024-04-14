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

const Card = () => {
  const [campersData, setCampersData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCampersData = async () => {
      const data = await fetchCampers();
      setCampersData(data);
    };
    fetchCampersData();
  }, []);

  const handleClick = () => {
    if (campersData) {
      openDetailsPopup(campersData[index]);
    }
  };

  const openDetailsPopup = data => {
    // Assuming Details component has a method like open
    Details.open(data);
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
    </div>
  );
};

export default Card;

import { useState, useEffect } from 'react';
import { fetchCampers } from 'utils/api/api';
import Button from './Button';
import Details from './Details';
import { HeartIcon, MapPinIcon, StarIcon } from './Icons';

const Card = () => {
  const [campersData, setCampersData] = useState(null);

  useEffect(() => {
    const fetchCampersData = async () => {
      const data = await fetchCampers();
      setCampersData(data);
    };
    fetchCampersData();
  }, []);

  const handleClick = () => {
    if (campersData) {
      openDetailsPopup(campersData);
    }
  };

  const openDetailsPopup = data => {
    // Assuming Details component has a method like open
    Details.open(data);
  };

  return (
    <div className="card-wrapper">
      {campersData && (
        <>
          <img
            className="card-image"
            src={campersData[0].gallery[0]}
            alt={campersData[0].name}
          />
          <div className="card-info">
            <div className="card-header-wrapper">
              <h2 className="card-title">{campersData[0].name}</h2>
              <div className="card-price">
                <p className="card-price-text">{campersData[0].price}</p>
                <Button className={'button-favorite'}>
                  <HeartIcon />
                </Button>
              </div>
            </div>
            <div className="card-details">
              <div className="card-rating-wrapper">
                <StarIcon />
                <p className="card-rating-reviews">
                  {campersData[0].rating}({campersData[0].reviews.length}{' '}
                  Reviews)
                </p>
              </div>
              <div className="card-location-wrapper">
                <MapPinIcon />
                <p className="card-location">{campersData[0].location}</p>
              </div>
            </div>
            <p className="card-description">{campersData[0].description}</p>
            <ul className="card-details-list">
              {Object.entries(campersData[0].details).map(
                ([key, value], index) => (
                  <li className="card-details-item" key={index}>
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

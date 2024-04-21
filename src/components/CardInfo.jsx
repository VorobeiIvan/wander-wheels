import React from 'react';
import CardDetails from './CardDetails';
import CardDetailsList from './CardDetailsList';
import Button from './Button';
import FavoriteBtn from './FavoriteBtn';

const CardInfo = ({
  campersData,
  id,
  isFavorite,
  handleFavoriteClick,
  handleClick,
}) => {
  return (
    <div className="card-info">
      <div className="card-header-wrapper">
        <h2 className="card-title">{campersData[id].name}</h2>
        <div className="card-price">
          <p className="card-price-text">€{campersData[id].price}</p>
          <FavoriteBtn isFavorite={isFavorite} onClick={handleFavoriteClick} />
        </div>
      </div>
      <CardDetails
        rating={campersData[id].rating}
        reviewsLength={campersData[id].reviews.length}
        location={campersData[id].location}
      />
      <p className="card-description">{campersData[id].description}</p>
      <CardDetailsList
        details={campersData[id].details}
        exceptions={['adults', 'Air conditione', 'hob', 'beds']}
      />
      <Button type={'button'} className="card-button" onClick={handleClick}>
        Show more
      </Button>
    </div>
  );
};

export default CardInfo;

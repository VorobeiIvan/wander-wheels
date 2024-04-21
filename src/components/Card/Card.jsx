import React, { useState, useEffect } from 'react';
import { fetchCampers } from 'utils/api/api';
import Details from '../Modal/Details';
import CardInfo from './CardInfo';

const Card = ({ data }) => {
  const [campersData, setCampersData] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchCampersData = async () => {
      try {
        const data = await fetchCampers();
        setCampersData(data);
      } catch (error) {
        console.error('Error fetching campers:', error);
      }
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

  const handleClick = () => {
    if (campersData) {
      openDetails();
    }
  };

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
          <CardInfo
            campersData={campersData}
            id={id}
            isFavorite={isFavorite}
            handleFavoriteClick={handleFavoriteClick}
            handleClick={handleClick}
          />
        </>
      )}
      {isDetailsOpen && (
        <Details
          id={id}
          campersData={campersData}
          onClose={closeDetails}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default Card;

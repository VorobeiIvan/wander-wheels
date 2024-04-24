import { useEffect, useState } from 'react';
import { fetchCampers } from 'utils/api/api';
import CardInfo from './CardInfo';
import { Details } from 'components';

const Card = ({ data }) => {
  const [campersData, setCampersData] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [, setLoading] = useState(false);
  const [, setError] = useState('');

  useEffect(() => {
    const fetchCampersData = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await fetchCampers();
        setCampersData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
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
  const details = campersData && campersData[id];

  return (
    <div className="card-wrapper">
      {details && (
        <>
          <img
            className="card-image"
            src={details.gallery[0]}
            alt={details.name}
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
      {isDetailsOpen && details && (
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

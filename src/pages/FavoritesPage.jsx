import React, { useState, useEffect } from 'react';
import { Button, Card } from 'components';

const FavoritesPage = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const fetchFavoriteCards = () => {
      const favorites = JSON.parse(localStorage.getItem('favoriteCards')) || [];
      setFavoriteCards(favorites);
    };
    fetchFavoriteCards();
  }, [favoriteCards]);

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
  };

  return (
    <main className="favorites-page">
      <section className="favorites-card">
        {favoriteCards.length === 0 ? (
          <p className="favorites-card-text">No favorite cards yet.</p>
        ) : (
          <>
            {favoriteCards.slice(0, visibleCards).map((card, index) => (
              <Card key={index} data={card} index={index} />
            ))}
            {visibleCards < favoriteCards.length && (
              <Button
                type={'button'}
                className={'load-more-button'}
                onClick={handleLoadMore}
              >
                Load more
              </Button>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default FavoritesPage;

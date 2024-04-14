import React, { useState } from 'react';
import { Button, Card } from 'components';

const FavoritesPage = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [initialCards, setInitialCards] = useState([...Array(6).keys()]);
  const [favoriteCards, setFavoriteCards] = useState([]);

  const addToFavorites = card => {
    setFavoriteCards(prevFavoriteCards => [...prevFavoriteCards, card]);
  };
  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
  };

  return (
    <main className="favorites-page">
      <section className="favorites-card">
        {initialCards.slice(0, visibleCards).map(item => (
          <Card key={item.id} {...item} addToFavorites={addToFavorites} />
        ))}
        {visibleCards < initialCards.length && (
          <Button
            type={'button'}
            className={'load-more-button'}
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        )}
      </section>
    </main>
  );
};

export default FavoritesPage;

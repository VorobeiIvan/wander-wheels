import React, { useState } from 'react';
import { Button, Card, FiltersForm } from 'components';

const CatalogPage = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [initialCards, setInitialCards] = useState(
    [...Array(10).keys()].map(i => ({ id: i, title: `Card ${i}` }))
  );

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
  };

  return (
    <main className="catalog-page">
      <section className="filters-form">
        <FiltersForm />
      </section>
      <section className="catalog">
        <ul className="catalog-list">
          {initialCards.slice(0, visibleCards).map((card, index) => (
            <li className="catalog-item" key={index}>
              <Card data={card} />
            </li>
          ))}
        </ul>
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

export default CatalogPage;

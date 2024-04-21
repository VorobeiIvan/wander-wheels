import React, { useState } from 'react';
import { Button, Card } from 'components';
import { loadMoreButtonProps } from 'utils/buttonProps';
import FilterForm from 'components/Forms/FilterForm';

const CatalogPage = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [initialCards] = useState(
    [...Array(10).keys()].map(i => ({ id: i, title: `Card ${i}` }))
  );

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
  };

  return (
    <main className="catalog-page">
      <section className="filters-form">
        <FilterForm />
      </section>
      <section className="catalog">
        <ul className="catalog-list">
          {initialCards.slice(0, visibleCards).map((card, index) => (
            <li className="catalog-item" key={index}>
              <Card key={card.id} data={card} />
            </li>
          ))}
        </ul>
        {visibleCards < initialCards.length && (
          <Button onClick={handleLoadMore} {...loadMoreButtonProps} />
        )}
      </section>
    </main>
  );
};

export default CatalogPage;

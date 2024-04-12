import { Card, FiltersForm } from 'components';

const CatalogPage = () => {
  const cards = [
    {
      id: 1,
      title: 'Title',
      image: ['https://place-hold.it/300x300', 'https://place-hold.it/300x300'],
      details: {},
      price: 0,
      location: 'Location',
      rating: 0,
      reviews: 0,
      description: 'Description',
      detailsIcon: {},
    },
    {
      id: 2,
      title: 'Title',
      image: ['https://place-hold.it/300x300', 'https://place-hold.it/300x300'],
      details: {},
      price: 0,
      location: 'Location',
      rating: 0,
      reviews: 0,
      description: 'Description',
      detailsIcon: {},
    },
    {
      id: 3,
      title: 'Title',
      image: ['https://place-hold.it/300x300', 'https://place-hold.it/300x300'],
      details: {},
      price: 0,
      location: 'Location',
      rating: 0,
      reviews: 0,
      description: 'Description',
      detailsIcon: {},
    },

    {
      id: 4,
      title: 'Title',
      image: ['https://place-hold.it/300x300', 'https://place-hold.it/300x300'],
      details: {},
      price: 0,
      location: 'Location',
      rating: 0,
      reviews: 0,
      description: 'Description',
      detailsIcon: {},
    },
  ];
  return (
    <main className="catalog-page">
      <section className="filters-form">
        <FiltersForm />
      </section>
      <section className="catalog">
        <ul>
          <li className="catalog-item">
            {cards.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </li>
        </ul>
        <button type="button" className="show-more button">
          Show more
        </button>
      </section>
    </main>
  );
};

export default CatalogPage;

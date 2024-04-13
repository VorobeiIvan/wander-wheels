import { Button, Card } from 'components';

const FavoritesPage = () => {
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
  ];
  return (
    <main className="favorites-page">
      <section className="favorites-card">
        {cards.map(item => (
          <Card key={item.id} {...item} />
        ))}
        <Button type={'button'} className={'load-more-button'}>
          Load more
        </Button>
      </section>
    </main>
  );
};

export default FavoritesPage;

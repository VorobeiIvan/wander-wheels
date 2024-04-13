import Button from './Button';
import Details from './Details';
import { HeartIcon, MapPinIcon, StarIcon } from './Icons';

const Card = data => {
  const {
    title = 'Title',
    image = ['https://place-hold.it/300x300', 'https://place-hold.it/300x300'],
    details = {},
    price = 0,
    location = 'Location',
    rating = 0,
    reviews = 0,
    description = 'Description',
    detailsIcon = {},
    icons = {},
  } = data;

  const handlerClick = () => {
    openDetailsPopup(data);
  };

  const openDetailsPopup = data => {
    Details.open(data);
  };

  return (
    <div className="search-card-wrapper">
      <img className="search-card-image" src={image[0]} alt={title} />
      <div className="search-card-info">
        <div className="search-card-header-wrapper">
          <h2 className="search-card-title">{title}</h2>
          <div className="search-card-price">
            <p className="search-card-price-text">{price}</p>
            <Button type={'button'} className="search-card-button">
              <HeartIcon />
            </Button>
          </div>
        </div>
        <div className="search-card-details">
          <div className="search-card-rating-wrapper">
            <StarIcon />
            <p className="search-card-rating-reviews">
              {rating}({reviews} Reviews)
            </p>
          </div>
          <div className="search-card-location-wrapper">
            <MapPinIcon />
            <p className="search-card-location">{location}</p>
          </div>
        </div>
        <p className="search-card-description">{description}</p>
        <ul className="search-card-details-list">
          {Object.entries(details).map(([key, value]) => (
            <li className="search-card-details-item" key={key}>
              {icons[detailsIcon[key]]}
              <p className="search-card-details-text">
                {key}: {value}
              </p>
            </li>
          ))}
        </ul>
        <Button
          type={'button'}
          className="search-card-button"
          onClick={handlerClick}
        >
          Show more
        </Button>
      </div>
    </div>
  );
};

export default Card;

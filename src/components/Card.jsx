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
  } = data;
  return (
    <div className="search-card-wrapper">
      <img className="search-card-image" src={image[0]} alt={title} />
      <div className="search-card-info">
        <div className="search-card-header-wrapper">
          <h2 className="search-card-title">{title}</h2>
          <div className="search-card-price">
            <p className="search-card-price-text">{price}</p>
            <input
              type="checkbox"
              className="favorite-checkbox visible"
              onChange={event => event.target.checked}
              title="Favorite"
            />
            <svg className="favorite">
              <use href="/src/images/heart.svg" />
            </svg>
          </div>
        </div>
        <div className="search-card-details">
          <div className="search-card-rating-wrapper">
            <svg className="star">
              <use href="/src/images/star.svg" />
            </svg>
            <p className="search-card-rating-reviews">
              {rating}({reviews} Reviews)
            </p>
          </div>
          <div className="search-card-location-wrapper">
            <svg className="map-pin">
              <use href="/src/images/map-pin.svg" />
            </svg>
            <p className="search-card-location">{location}</p>
          </div>
        </div>
        <p className="search-card-description">{description}</p>
        <ul className="search-card-details-list">
          {Object.entries(details).map(([key, value]) => (
            <li className="search-card-details-item" key={key}>
              <svg className="search-card-details-icon">
                <use href={detailsIcon[key]} />
              </svg>
              <p className="search-card-details-text">
                {key}: {value}
              </p>
            </li>
          ))}
        </ul>
        <button type="button" className="show-more button">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Card;

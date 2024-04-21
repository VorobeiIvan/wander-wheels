import { cardDetailsIcon as icons } from 'utils/cardDetailsIcon';

const CardDetailsList = ({ details, exceptions }) => {
  return (
    <ul className="card-details-list">
      {Object.entries(details).map(([key, value], id) => (
        <li className="card-details-item" key={id}>
          {icons[key]}
          <p className="card-details-text">
            {exceptions.includes(key)
              ? `${value} ${key}`
              : value <= 1
              ? key.charAt(0).toUpperCase() + key.slice(1)
              : key}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CardDetailsList;

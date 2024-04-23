import { cardDetailsIcon as icons } from 'utils/cardDetailsIcon';

const CardDetailsList = ({ details, exceptions }) => {
  if (!details) {
    return null;
  }

  const firstSixEntries = Object.entries(details).slice(0, 6);

  return (
    <ul className="card-details-list">
      {firstSixEntries.map(([key, value], id) => (
        <li className="card-details-item" key={id}>
          {icons[key]}
          <p className="card-details-text">
            {exceptions && exceptions.includes(key)
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

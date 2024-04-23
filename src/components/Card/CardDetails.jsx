import { MapPinIcon, StarIcon } from 'components/Icons';

const CardDetails = ({ rating, reviewsLength, location }) => {
  return (
    <div className="card-details">
      <div className="card-rating-wrapper">
        <StarIcon />
        <p className="card-rating-reviews">
          {rating}({reviewsLength} Reviews)
        </p>
      </div>
      <div className="card-location-wrapper">
        <MapPinIcon />
        <p className="card-location">{location}</p>
      </div>
    </div>
  );
};

export default CardDetails;

import CardDetails from 'components/Card/CardDetails';
import ModalCardDetailsList from './ModalCardDetailsList';
const ModalCardInfo = ({ campersData, id }) => {


  return (
    <div className="details-card-info">
      <h2 className="details-card-title">{campersData[id].name}</h2>
      <CardDetails
        rating={campersData[id].rating}
        reviewsLength={campersData[id].reviews.length}
        location={campersData[id].location}
      />
      <p className="card-price-text">€{campersData[id].price.toFixed(2)}</p>
      <div className="details-card-container">
        <ModalCardDetailsList
          gallery={campersData[id].gallery}
          alt={campersData[id].name}
        />
        <p className="details-card-description">
          {campersData[id].description}
        </p>
      </div>
    </div>
  );
};

export default ModalCardInfo;

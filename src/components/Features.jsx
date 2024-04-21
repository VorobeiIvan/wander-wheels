// import CardDetailsList from './Card/CardDetailsList';
import BookingForm from './Forms/BookingForm';

const Features = () => {
  return (
    <section className="features">
      {/* <div className="vehicle-details-wrapper">
        <CardDetailsList
          details={campersData[id].details}
          exceptions={['adults', 'Air conditione', 'hob', 'beds']}
        />
        <h2>Vehicle details</h2>
        <hr className="hr" />
        <ul className="card-details-list">
          <li className="card-details-item">
            <p className="card-details-text">Form</p>
            <p className="card-details-text">{form}</p>
          </li>
          <li className="card-details-item">
            <p className="card-details-text">Length</p>
            <p className="card-details-text">{length}</p>
          </li>
          <li className="card-details-item">
            <p className="card-details-text">Width</p>
            <p className="card-details-text">{width}</p>
          </li>
          <li className="card-details-item">
            <p className="card-details-text">Height</p>
            <p className="card-details-text">{height}</p>
          </li>
          <li className="card-details-item">
            <p className="card-details-text">Tank</p>
            <p className="card-details-text">{tank}</p>
          </li>
          <li className="card-details-item">
            <p className="card-details-text">Consumption</p>
            <p className="card-details-text">{consumption}</p>
          </li>
        </ul>
      </div> */}
      <BookingForm />
    </section>
  );
};

export default Features;

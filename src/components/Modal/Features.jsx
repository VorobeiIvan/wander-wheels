import { BookingForm } from 'components';
import CardDetailsList from 'components/Card/CardDetailsList';

const Features = ({ campersData, id }) => {
  const renderDetails = () => {
    const { form, length, width, height, tank, consumption } = campersData[id];
    const details = [
      { label: 'Form', value: form },
      { label: 'Length', value: length },
      { label: 'Width', value: width },
      { label: 'Height', value: height },
      { label: 'Tank', value: tank },
      { label: 'Consumption', value: consumption },
    ];

    return details.map(({ label, value }) => (
      <li className="features-details-item" key={label}>
        <p className="features-details-text">{label}</p>
        <p className="features-details-text">{value}</p>
      </li>
    ));
  };
  return (
    <section className="features" id="features">
      <div className="vehicle-details-wrapper">
        <CardDetailsList
          details={campersData[id].details}
          exceptions={['adults', 'Air conditioner', 'hob', 'beds']}
          numberOfCards={20}
        />
        <h2>Vehicle details</h2>
        <hr className="hr" />
        <ul className="features-details-list">{renderDetails()}</ul>
      </div>
      <BookingForm />
    </section>
  );
};

export default Features;

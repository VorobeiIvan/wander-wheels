import BookingForm from './BookingForm';

const Features = ({
  campersData,
  index,
  icons,
  exceptions,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  return (
    <section className="features">
      <div className="vehicle-details-wrapper">
        <ul className="card-details-list">
          {Object.entries(campersData[index].details).map(
            ([key, value], index) => (
              <li className="card-details-item" key={index}>
                {icons[key]}
                <p className="card-details-text">
                  {exceptions.includes(key)
                    ? `${value} ${key}`
                    : value <= 1
                    ? key.charAt(0).toUpperCase() + key.slice(1)
                    : key}
                </p>
              </li>
            )
          )}
        </ul>
        <h2>Vehicle details</h2>
        <hr className="hr" />
        <ul className="card-details-list">
          <li className="card-details-item">
            <p>Form</p>
            <p>{form}</p>
          </li>
          <li>
            <p>Length</p>
            <p>{length}</p>
          </li>
          <li>
            <p>Width</p>
            <p>{width}</p>
          </li>
          <li>
            <p>Height</p>
            <p>{height}</p>
          </li>
          <li>
            <p>Tank</p>
            <p>{tank}</p>
          </li>
          <li>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </ul>
      </div>
      <BookingForm />
    </section>
  );
};

export default Features;

const ModalCardDetailsList = ({ gallery, alt }) => {
  return (
    <ul className="details-card-images-list">
      {gallery.map((image, idx) => (
        <li className="details-card-item" key={idx}>
          <img className="details-card-image" src={image} alt={alt} />
        </li>
      ))}
    </ul>
  );
};

export default ModalCardDetailsList;

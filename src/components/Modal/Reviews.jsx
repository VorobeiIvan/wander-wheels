import { BookingForm } from 'components';
import { StarIcon } from 'components/Icons';

const Reviews = ({ campersData, id }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          filled={i < campersData[id].reviews.reviewer_rating}
        />
      );
    }
    return stars;
  };

  return (
    <section className="reviews" id="reviews">
      <ul>
        {campersData.reviews.map(
          ({ avatar: avatar_url, name: reviewer_name, review: comment }) => (
            <li>
              <img className="avatar" src={avatar_url} alt={reviewer_name} />
              <h2>{reviewer_name}</h2>
              {renderStars()}
              <p>{comment}</p>
            </li>
          )
        )}
      </ul>

      <BookingForm />
    </section>
  );
};

export default Reviews;

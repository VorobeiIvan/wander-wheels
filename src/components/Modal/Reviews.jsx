import { BookingForm } from 'components';
import { StarIcon } from 'components/Icons';

const Reviews = ({ campersData, id }) => {
  const renderStars = reviewer_rating => {
    const stars = [];
    if (stars <= 5) {
    }
    for (let i = 0; i < reviewer_rating; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  };

  return (
    <section className="reviews" id="reviews">
      <ul className="reviews-list">
        {campersData[id].reviews.map(
          ({ avatar_url, reviewer_name, comment, reviewer_rating }) => (
            <li className="reviews-item" key={reviewer_name}>
              <div className="reviews-header">
                <div className="avatar">{reviewer_name.slice(0, 1)}</div>
                <div className="reviews-info">
                  <p className="reviews-name">{reviewer_name}</p>
                  {renderStars(reviewer_rating)}
                </div>
              </div>
              <p className="reviews-text">{comment}</p>
            </li>
          )
        )}
      </ul>

      <BookingForm />
    </section>
  );
};

export default Reviews;

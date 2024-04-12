import { BookingForm } from 'components';
import '../styles/index.css';
const HomePage = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            Choose your camper and embark on an exciting journey
          </h1>
          <p className="hero-text">
            Your dreams can become reality, make your choice!
          </p>
        </div>
      </section>
      <section className="about-us">
        <div className="about-us-content-wrapper">
          <h2 className="about-us-title">About us</h2>
          <p className="about-us-text">
            <b>Where do we begin?</b> WanderWheels is more than just a camper
            rental service. We are a team of enthusiasts deeply passionate about
            travel and nature. Our goal is to make camper trips accessible,
            convenient, and unforgettable for everyone.
          </p>
          <p className="about-us-text">
            <b>What do we offer?</b> At WanderWheels, we offer a wide selection
            of quality campers for rental that cater to various needs and
            budgets. Our campers are equipped with everything necessary for
            comfortable living during journeys, allowing you to enjoy freedom
            and adventure without feeling discomfort.
          </p>
          <p className="about-us-text">
            <b>Our mission: </b>We aim to make every journey unforgettable and
            inspiring. Our mission is to provide our clients with the best means
            to explore the world, regardless of where their dreams take them.
          </p>
          <p className="about-us-text">
            Join us on this exciting journey of discovery and exploration.
            Together, we will create unforgettable adventures and memories that
            will forever remain in the hearts of every traveler. Embark on a
            journey with WanderWheels and let's make every moment unique!
          </p>
        </div>

        <BookingForm />
      </section>
    </main>
  );
};

export default HomePage;

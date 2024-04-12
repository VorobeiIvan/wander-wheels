import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from 'components';
import '../styles/index.css';
import { CatalogPage, FavoritesPage, HomePage } from 'pages';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        {/* <Route path="details" element={<Details />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

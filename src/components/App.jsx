import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Details, Features, Footer, Header, Reviews } from 'components';

import { CatalogPage, FavoritesPage, HomePage } from 'pages';

const App = () => {
  const [detailsData, setDetailsData] = useState(null);

  const openDetails = data => {
    setDetailsData(data);
  };

  const closeDetails = () => {
    setDetailsData(null);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route
            path="catalog"
            element={<CatalogPage openDetails={openDetails} />}
          />
          <Route
            path="favorites"
            element={<FavoritesPage openDetails={openDetails} />}
          />
          <Route
            path="details/:detailsId"
            element={<Details data={detailsData} onClose={closeDetails} />}
          />
          <Route
            path="features"
            element={
              <Features
              // id={detailsData.id}
              // campersData={detailsData.campersData}
              />
            }
          />

          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

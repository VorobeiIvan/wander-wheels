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
          >
            {detailsData && (
              <>
                <Route
                  path="features"
                  element={
                    <Features campersData={detailsData} id={detailsData.id} />
                  }
                />
                <Route
                  path="reviews"
                  element={
                    <Reviews campersData={detailsData} id={detailsData.id} />
                  }
                />
              </>
            )}
          </Route>
        </Route>
        {/* <Route path="*" element={<HomePage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

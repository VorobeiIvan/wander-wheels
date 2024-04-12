import FilterForm from 'components/FiltersForm';

const CatalogPage = () => {
  return (
    <main>
      <section className="filters-form">
        <FilterForm />
      </section>
      <section className="catalog">
        <h2 className="catalog-title">Catalog</h2>
      </section>
    </main>
  );
};

export default CatalogPage;

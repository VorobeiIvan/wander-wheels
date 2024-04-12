import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';

const FilterForm = () => {
  const initialValues = {
    location: '',
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    'shower-wc': false,
    radio: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <Input />
      <h2 className="filter-title">Filters</h2>
      <Checkbox values={initialValues} />
      <Radio values={initialValues} />
      <button type="submit" className="form-button">
        Search
      </button>
    </form>
  );
};

export default FilterForm;

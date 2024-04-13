import Button from './Button';
import CheckboxList from './CheckboxList';
import LocationInput from './LocationInput';
import RadioList from './RadioList';

const FilterForm = () => {
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      console.log('Form submitted');
    }
  };
  const checkboxOptions = [
    { name: 'ac', label: 'AC' },
    { name: 'automatic', label: 'Automatic' },
    { name: 'kitchen', label: 'Kitchen' },
    { name: 'tv', label: 'TV' },
    { name: 'shower-wc', label: 'Shower/WC' },
  ];
  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <LocationInput />
      <h2 className="filter-title">Filters</h2>
      <CheckboxList checkboxArr={checkboxOptions} />
      <RadioList
        values={{ van: true, 'fully-integrated': true, alcove: true }}
      />
      <Button type={'submit'} onClick={handleSubmit} className="lo-button">
        Search
      </Button>
    </form>
  );
};

export default FilterForm;

import Button from '../Button';
import Checkbox from './Checkbox/Checkbox';
import LocationInput from './LocationInput';
import RadioButtons from './Radio/RadioButtons';

const FilterForm = () => {
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      console.log('Form submitted');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <LocationInput />
      <h2 className="filter-title">Filters</h2>
      <Checkbox />
      <RadioButtons />
      <Button type={'submit'} onClick={handleSubmit} className="search-button">
        Search
      </Button>
    </form>
  );
};

export default FilterForm;

import Button from './Button';
import CheckboxList from './CheckboxList';
import {
  ACIcon,
  AutomaticIcon,
  KitchenIcon,
  ShowerWCIcon,
  TVIcon,
} from './Icons';
import LocationInput from './LocationInput';
import RadioList from './RadioList';

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
      <CheckboxList />
      <RadioList />
      <Button type={'submit'} onClick={handleSubmit} className="search-button">
        Search
      </Button>
    </form>
  );
};

export default FilterForm;

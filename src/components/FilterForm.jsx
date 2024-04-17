import {
  checkboxInputProps,
  radioInputProps,
  locationInputProps,
} from 'utils/inputProps';
import { filterFormButtonProps } from 'utils/buttonProps';
import Form from './Form';
import Input from './Input';
import SelectionList from './SelectionList';

const FilterForm = () => {
  return (
    <Form className="filter-form" buttonProps={filterFormButtonProps}>
      <Input {...locationInputProps} />
      <h2 className="booking-form-title">Filters</h2>
      <SelectionList
        title="Vehicle equipment"
        options={checkboxInputProps}
        type="checkbox"
      />
      <SelectionList
        title="Vehicle type"
        options={radioInputProps}
        type="radio"
      />
    </Form>
  );
};

export default FilterForm;

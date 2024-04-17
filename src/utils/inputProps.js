import {
  ACIcon,
  AlcoveIcon,
  AutomaticIcon,
  FullyIntegratedIcon,
  KitchenIcon,
  MapPinIcon,
  ShowerWCIcon,
  TVIcon,
  VanIcon,
} from 'components/Icons';

export const locationInputProps = {
  icon: <MapPinIcon />,
  label: 'Enter your location:',
  className: 'input-location input',
  type: 'text',
  id: 'locationInput',
  placeholder: 'City',
  value: '{ location }',
  pattern: '^[A-Za-zs]+$',
  required: true,
};

export const radioInputProps = [
  { value: 'van', label: 'Van', icon: <VanIcon />, name: 'radio' },
  {
    value: 'fully-integrated',
    label: 'Fully Integrated',
    icon: <FullyIntegratedIcon />,
    name: 'radio',
  },
  { value: 'alcove', label: 'Alcove', icon: <AlcoveIcon />, name: 'radio' },
];

export const checkboxInputProps = [
  { name: 'ac', label: 'AC', icon: <ACIcon /> },
  { name: 'automatic', label: 'Automatic', icon: <AutomaticIcon /> },
  { name: 'kitchen', label: 'Kitchen', icon: <KitchenIcon /> },
  { name: 'tv', label: 'TV', icon: <TVIcon /> },
  { name: 'shower-wc', label: 'Shower/WC', icon: <ShowerWCIcon /> },
];

export const dateInputProps = {
  type: 'date',
  placeholder: 'Booking date',
  required: true,
  title: 'Enter booking date (YYYY-MM-DD)',
  pattern: '^d{4}-d{2}-d{2}$',
};
export const emailInputProps = {
  type: 'email',
  placeholder: 'Email',
  required: true,
  title: 'Enter your email (e.g., example@example.com)',
  pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
};
export const nameInputProps = {
  type: 'text',
  placeholder: 'Name',
  required: true,
  title: 'Enter your name',
  pattern: '[A-Za-zs]+',
};

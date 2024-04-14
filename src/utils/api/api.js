import axios from 'axios';

const baseURL = 'https://661b7fb265444945d04f9b44.mockapi.io/advert';
const contactsEndpoint = '/campers';

export const fetchCampers = async () => {
  const response = await axios.get(`${baseURL}${contactsEndpoint}`);
  return response.data;
};

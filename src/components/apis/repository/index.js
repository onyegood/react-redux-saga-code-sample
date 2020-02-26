import axios from 'axios';
import { BASE_URL } from '../url';

const repositories = async (action) => {
  const response = await axios.get(`${BASE_URL}users/${action.payload}/repos`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

export { repositories };
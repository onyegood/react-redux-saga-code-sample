import axios from 'axios';
import { BASE_URL } from '../url';

const branches = async (action) => {
  const response = await axios.get(`${BASE_URL}repos/${action.payload.userName}/${action.payload.name}/branches`);
  const data = await response.data;
  
  if (response.status > 400) {
    throw new Error(data.errors)
    
  }
  return data;
}

export { branches };
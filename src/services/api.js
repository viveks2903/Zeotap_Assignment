import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const saveSpreadsheet = async (name, data) => {
  const response = await axios.post(`${API_URL}/save`, { name, data });
  return response.data;
};

export const loadSpreadsheet = async (name) => {
  const response = await axios.get(`${API_URL}/load/${name}`);
  return response.data;
};

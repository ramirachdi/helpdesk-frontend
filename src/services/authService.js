import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data; // Assuming this will return the JWT token or user data
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, { email, password, name });
    return response.data; // Assuming this returns some kind of confirmation or user data
  } catch (error) {
    throw error;
  }
};

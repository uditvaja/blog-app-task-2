
import axios from "axios";
export const setToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  

  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  
  const API_BASE_URL = 'http://localhost:3000';  

 
export const login = async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${error}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };
  
  export const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error from server:', error.response); // Log response for debugging
      if (error.response && error.response.status === 400) {
        throw new Error(error.response.data.message || 'Registration failed');
      } else {
        throw new Error('Registration failed. Please try again.');
      }
    }
  };
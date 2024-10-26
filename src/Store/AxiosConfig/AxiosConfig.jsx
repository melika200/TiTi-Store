import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com', // Base URL of your API
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;

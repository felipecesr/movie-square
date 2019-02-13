import axios from 'axios';

const defaultOptions = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    api_key: process.env.VUE_APP_API_KEY
  }
};

const axiosInstance = axios.create(defaultOptions);

export default axiosInstance;

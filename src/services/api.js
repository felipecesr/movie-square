import axios from 'axios';

const config = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  params: {
    api_key: process.env.VUE_APP_API_KEY
  }
};

const _axios = axios.create(config);

export function fetchListData(page) {
  return _axios.get(`/tv/popular`, { params: { page } }).then(data => data);
}

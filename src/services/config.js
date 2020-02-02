import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST_NAME,
  headers: {
    clientkey: process.env.REACT_APP_CLIENT_KEY
  }
});

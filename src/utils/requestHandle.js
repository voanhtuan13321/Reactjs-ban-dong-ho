import axios from 'axios';

import { localStorages } from './localStorage';

const requestHandler = axios.create({
  baseURL: 'https://abac-116-110-163-213.ngrok.io/',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

requestHandler.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${localStorages.getToken()}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default requestHandler;

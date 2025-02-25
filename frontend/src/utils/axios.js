import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://user-management-new-backend.onrender.com/api',
  timeout: 5000,
});

export default instance;

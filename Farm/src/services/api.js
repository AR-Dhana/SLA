import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust to your backend
});

export default API;

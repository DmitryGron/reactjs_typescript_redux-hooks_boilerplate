import axios from 'axios';

const HTTP_TIMEOUT = 30000;

const http = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: HTTP_TIMEOUT,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});

axios.interceptors.response.use(response => response, error => {
  return Promise.reject(error);
});
// const user = localStorage.getItem('user');
// user ? axios.defaults.headers.common['Authorization']  = JSON.parse(user).token : axios.defaults.headers.common['Authorization'] = undefined;

export default http;

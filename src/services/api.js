import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Assuming your backend API is served from the same domain
});

// Set the JWT token in the request headers
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;

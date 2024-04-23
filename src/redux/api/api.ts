import axios from 'axios';

const api = axios.create ({
  baseURL: import.meta.env.VITE_BACK_END_URL
});

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }    
    return config;
  },
  (error) => Promise.reject(error),
);


export default api;

import axios from 'axios';

const api = axios.create ({
  baseURL: import.meta.env.VITE_BACK_END_URL
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }    
    return config;
  },
  Promise.reject,
);


export default api;

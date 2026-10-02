import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL?.trim();

if (import.meta.env.PROD && !apiBaseUrl) {
  throw new Error('VITE_API_URL must be set for production deployments.');
}

const api=axios.create({
  baseURL: apiBaseUrl || "http://localhost:5000/api/v1/test"
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
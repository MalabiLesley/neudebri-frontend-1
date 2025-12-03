import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://neudebriappkenya.onrender.com";

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor to attach token (if logged in)
api.interceptors.request.use((config) => {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem("nd_token") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch {
    return config;
  }
});

export default api;

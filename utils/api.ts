// utils/api.ts
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://neudebriappkenya.onrender.com";

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("nd_token") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch {
    return config;
  }
});

// ✅ add named helpers
export async function apiPost(url: string, data: any) {
  return api.post(url, data);
}

export async function apiGet(url: string) {
  return api.get(url);
}

export default api;

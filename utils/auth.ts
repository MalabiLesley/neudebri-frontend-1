import { apiPost, apiGet } from "./api";

export async function login(email: string, password: string) {
  return await apiPost("/api/auth/login", { email, password });
}

export async function register(data: any) {
  return await apiPost("/api/auth/register", data);
}

export async function getProfile(token: string) {
  return await apiGet("/api/auth/me", token);
}

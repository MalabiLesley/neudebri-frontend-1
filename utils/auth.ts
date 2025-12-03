import api from "./api";

// Login function
export async function login(email: string, password: string) {
  return await api.post("/api/auth/login", { email, password });
}

// Get profile function
export async function getProfile(token: string) {
  return await api.get("/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// Example: logout (optional)
export async function logout() {
  return await api.post("/api/auth/logout");
}

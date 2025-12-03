import api from "./api";

// Get all cases
export async function getCases(token: string) {
  return await api.get("/api/cases", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// Create a new case
export async function createCase(data: any, token: string) {
  return await api.post("/api/cases", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

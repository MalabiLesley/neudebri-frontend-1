import api from "./api";

export async function getVisits(token: string) {
  return await api.get("/api/visits", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function createVisit(data: any, token: string) {
  return await api.post("/api/visits", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

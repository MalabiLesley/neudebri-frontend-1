import api from "./api";

export async function getPatients(token: string) {
  return await api.get("/api/patients", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function createPatient(data: any, token: string) {
  return await api.post("/api/patients", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

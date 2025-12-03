import { apiGet, apiPost, apiPut } from "./api";

export async function getPatients(token: string) {
  return await apiGet("/api/patients", token);
}

export async function createPatient(data: any, token: string) {
  return await apiPost("/api/patients", data, token);
}

export async function updatePatient(id: number, data: any, token: string) {
  return await apiPut(`/api/patients/${id}`, data, token);
}

import { apiGet, apiPost } from "./api";

export async function getVisits(token: string) {
  return await apiGet("/api/visits", token);
}

export async function createVisit(data: any, token: string) {
  return await apiPost("/api/visits", data, token);
}

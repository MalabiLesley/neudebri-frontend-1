import { apiGet, apiPost } from "./api";

export async function getCases(token: string) {
  return await apiGet("/api/cases", token);
}

export async function createCase(data: any, token: string) {
  return await apiPost("/api/cases", data, token);
}

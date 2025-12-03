import { apiGet, apiPost } from "./api";

export async function getInvoices(token: string) {
  return await apiGet("/api/invoices", token);
}

export async function createInvoice(data: any, token: string) {
  return await apiPost("/api/invoices", data, token);
}

import api from "./api";

export async function getInvoices(token: string) {
  return await api.get("/api/invoices", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function createInvoice(data: any, token: string) {
  return await api.post("/api/invoices", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

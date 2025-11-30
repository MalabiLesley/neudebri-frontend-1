import { useEffect, useState } from "react";

const joinUrl = (base: string | undefined, path = "") => {
  const b = (base ?? "").replace(/\/+$/, "");
  const p = path.replace(/^\/+/, "");
  return p ? `${b}/${p}` : b || "";
};

const useStatus = () => {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_URL ?? "https://neudebriappkenya.onrender.com";
        // call root or specific path as your backend exposes it:
        const url = joinUrl(base, ""); // or joinUrl(base, "api/status") if your backend exposes /api/status
        const response = await fetch(url, { method: "GET", headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setStatus(data);
      } catch (error: any) {
        console.error("Backend error:", error);
        setStatus({ message: "Backend unreachable", error: String(error) });
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return { status, loading };
};

export default useStatus;
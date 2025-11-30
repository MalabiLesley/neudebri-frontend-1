import { useEffect, useState } from "react";

const joinUrl = (base: string | undefined, path = "") => {
  const b = (base ?? "").replace(/\/+$/, "");
  const p = path.replace(/^\/+/, "");
  return p ? `${b}/${p}` : b || "";
};

type Status = {
  message?: string;
  environment?: string;
  [key: string]: any;
} | null;

const useStatus = () => {
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ac = new AbortController();

    const fetchStatus = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_URL ?? "https://neudebriappkenya.onrender.com";
        const url = joinUrl(base, ""); // call root by default
        const res = await fetch(url, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: ac.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        // guard against non-JSON responses
        const text = await res.text();
        const data = text ? JSON.parse(text) : null;
        setStatus(data);
        setError(null);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        console.error("useStatus error:", err);
        setStatus({ message: "Backend unreachable" });
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();

    return () => ac.abort();
  }, []);

  return { status, loading, error };
};

export default useStatus;
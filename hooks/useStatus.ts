import { useEffect, useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("https://neudebriappkenya.onrender.com/", {
          method: "GET",
          headers: { "Accept": "application/json" },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setStatus(data);
      } catch (error) {
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
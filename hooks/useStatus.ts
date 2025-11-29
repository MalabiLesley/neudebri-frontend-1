import { useEffect, useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("https://neudebriappkenya.onrender.com/api/status");
        const data = await response.json();
        setStatus(data);
      } catch {
        setStatus({ message: "Backend unreachable" });
      }
    };

    fetchStatus();
  }, []);

  return status;
};

export default useStatus;
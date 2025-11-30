"use client";

import { useEffect, useState } from "react";
import StatusCard from "./components/StatusCard";

export default function Home() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    const base =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://neudebriappkenya.onrender.com";
    const url = base.replace(/\/+$/, ""); // remove trailing slash

    fetch(url)
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch(() =>
        setStatus({
          message: "Backend unreachable",
          environment: "Unknown",
        })
      );
  }, []);

  return (
    <div className="flex flex-col items-center text-center space-y-6 py-10">
      <h1 className="text-4xl font-bold text-blue-600">
        Nuedebri Health App Kenya
      </h1>

      <p className="text-gray-700 text-lg max-w-2xl">
        A modern digital platform for patient monitoring, doctors, nurses, and
        administrators.
      </p>

      <StatusCard status={status} />
    </div>
  );
}

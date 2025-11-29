"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StatusCard from "./components/StatusCard";

export default function Home() {
  const [status, setStatus] = useState<any>(null);

 useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/status`)
    .then((res) => res.json())
    .then((data) => setStatus(data))
    .catch(() => setStatus({ message: "Backend unreachable", environment: "Unknown" }));
}, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold text-blue-600">
          Nuedebri Health App Kenya
        </h1>
        <p className="text-gray-700 text-lg">
          A modern digital platform for patient monitoring, doctors, nurses, and administrators.
        </p>
        <StatusCard status={status} />
      </div>
      <Footer />
    </main>
  );
}
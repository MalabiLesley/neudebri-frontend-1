"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://neudebriappkenya.onrender.com/api/dashboard";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const [patients, cases, visits, finance, doctors, system] = await Promise.all([
        axios.get(`${API}/patients`),
        axios.get(`${API}/cases`),
        axios.get(`${API}/visits`),
        axios.get(`${API}/finance`),
        axios.get(`${API}/doctors`),
        axios.get(`${API}/system`),
      ]);

      setData({
        patients: patients.data,
        cases: cases.data,
        visits: visits.data,
        finance: finance.data,
        doctors: doctors.data,
        system: system.data,
      });
    }

    load();
  }, []);

  if (!data) return <p className="text-center mt-20">Loading dashboard...</p>;

  const card = (title: string, value: any) => (
    <div className="bg-white p-6 rounded-xl shadow border text-center">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-3xl font-bold mt-2 text-blue-600">{value}</p>
    </div>
  );

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {card("Total Patients", data.patients.total_patients)}
        {card("New Patients (30 days)", data.patients.new_patients_last_30_days)}
        {card("Open Cases", data.cases.open_cases)}
        {card("Closed Cases", data.cases.closed_cases)}
        {card("Total Visits", data.visits.total_visits)}
        {card("Doctors", data.doctors.total_doctors)}
        {card("Total Invoices", data.finance.total_invoices)}
        {card("Revenue", `KSh ${data.finance.total_revenue}`)}
        {card("System Uptime (hrs)", data.system.uptime_hours)}
      </div>
    </div>
  );
}


import React from "react";
import Protected from "./components/Protected";
import StatCard from "./components/StatCard";

export default function DashboardPage() {
  return (
    <Protected>
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Active Patients" value="1,248" />
          <StatCard title="Open Cases" value="72" />
          <StatCard title="Pending Bills" value="KSH 428,500" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Recent Visits</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>John Kamau — 2025-11-28 — Follow-up</li>
              <li>Mary W. — 2025-11-27 — New registration</li>
              <li>Paul O. — 2025-11-26 — Prescription refill</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">System Status</h2>
            <p className="text-sm text-gray-700">Backend: Connected</p>
            <p className="text-sm text-gray-700">Env: production</p>
          </div>
        </section>
      </div>
    </Protected>
  );
}

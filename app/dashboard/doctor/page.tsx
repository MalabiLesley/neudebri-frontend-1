import React from "react";
import Protected from "../components/Protected";

export default function DoctorPage() {
  return (
    <Protected>
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700">Today's appointments, patient queue and notes.</p>
        </div>
      </div>
    </Protected>
  );
}

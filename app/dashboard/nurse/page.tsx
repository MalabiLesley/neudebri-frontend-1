import React from "react";
import Protected from "../components/Protected";

export default function NursePage() {
  return (
    <Protected>
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Nurse Dashboard</h1>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700">Patient vitals, medication tasks and assigned wards.</p>
        </div>
      </div>
    </Protected>
  );
}

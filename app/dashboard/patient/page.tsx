import React from "react";
import Protected from "../components/Protected";

export default function PatientPage() {
  return (
    <Protected>
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Patient Portal</h1>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700">Your appointments, prescriptions, and medical notes.</p>
        </div>
      </div>
    </Protected>
  );
}

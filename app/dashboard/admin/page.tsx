"use client";

import React from "react";
import Protected from "../components/Protected";

export default function AdminPage() {
  return (
    <Protected>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-slate-900">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">User Management</h2>
            <p className="text-slate-700">
              View, edit, or remove users from the system.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">System Settings</h2>
            <p className="text-slate-700">
              Configure app settings, permissions, and system behaviors.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Analytics</h2>
            <p className="text-slate-700">
              Monitor activity, patient flow, cases summary, and usage reports.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Security Logs</h2>
            <p className="text-slate-700">
              Track login attempts, suspicious activity, and admin actions.
            </p>
          </div>
        </div>
      </div>
    </Protected>
  );
}

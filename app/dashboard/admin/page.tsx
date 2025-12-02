import React from "react";
import Protected from "../components/Protected";

export default function AdminPage() {
  return (
    <Protected>
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700">Manage users, organizations and global settings.</p>
          <div className="mt-4 space-x-2">
            <button className="px-3 py-1 rounded bg-blue-600 text-white">Add User</button>
            <button className="px-3 py-1 rounded border">Import Data</button>
          </div>
        </div>
      </div>
    </Protected>
  );
}

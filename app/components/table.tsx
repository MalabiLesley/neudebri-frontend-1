"use client";
import React from "react";

export default function Table({ data = [], columns = [], loading = false }: any) {
  if (loading) return <div className="p-4">Loading...</div>;
  return (
    <div className="bg-white shadow rounded overflow-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((c:any) => <th key={c.field} className="p-3 text-left">{c.header}</th>)}
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr><td colSpan={columns.length+1} className="p-4 text-center text-sm text-slate-500">No records</td></tr>
          )}
          {data.map((row:any) => (
            <tr key={row.id || row.case_id || Math.random()} className="border-t">
              {columns.map((c:any) => (
                <td className="p-3" key={c.field + (row.id || "")}>
                  {row[c.field] ?? "-"}
                </td>
              ))}
              <td className="p-3">
                <button className="text-sm mr-2">View</button>
                <button className="text-sm mr-2 text-amber-600">Edit</button>
                <button className="text-sm text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

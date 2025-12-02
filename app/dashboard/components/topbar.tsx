"use client";
import React from "react";

export default function Topbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto p-3 flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-600">Welcome back —</span>
          <span className="ml-2 font-semibold">Lesley</span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-3 py-1 rounded border text-sm">Notifications</button>
          <button
            className="px-3 py-1 rounded bg-red-600 text-white text-sm"
            onClick={() => {
              // simple logout for now
              if (typeof window !== "undefined") {
                localStorage.removeItem("neudebri_token");
                location.href = "/login";
              }
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

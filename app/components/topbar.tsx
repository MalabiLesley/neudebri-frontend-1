"use client";
import React from "react";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Nuedebri" className="h-8 w-8" />
          <h1 className="text-lg font-semibold text-slate-800">Nuedebri Health</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-sm px-3 py-2 rounded-md hover:bg-slate-50">Dashboard</Link>
          <Link href="/profile" className="text-sm px-3 py-2 rounded-md hover:bg-slate-50">Profile</Link>
          <button id="logoutBtn" className="text-sm px-3 py-2 rounded-md hover:bg-slate-50">Log out</button>
        </div>
      </div>
    </header>
  );
}

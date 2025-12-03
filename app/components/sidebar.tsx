"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <aside className={`bg-white border-r transition-all ${open ? "w-64" : "w-16"} hidden md:block`}>
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" className="h-8 w-8" alt="logo" />
            <span className="font-semibold text-slate-800">Nuedebri</span>
          </div>
        </div>

        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            <li><Link href="/dashboard" className="block py-2 px-3 rounded hover:bg-slate-50">Dashboard</Link></li>
            <li><Link href="/dashboard/patients" className="block py-2 px-3 rounded hover:bg-slate-50">Patients</Link></li>
            <li><Link href="/dashboard/cases" className="block py-2 px-3 rounded hover:bg-slate-50">Cases</Link></li>
            <li><Link href="/dashboard/visits" className="block py-2 px-3 rounded hover:bg-slate-50">Visits</Link></li>
            <li><Link href="/dashboard/doctors" className="block py-2 px-3 rounded hover:bg-slate-50">Doctors</Link></li>
            <li><Link href="/dashboard/nurses" className="block py-2 px-3 rounded hover:bg-slate-50">Nurses</Link></li>
            <li><Link href="/dashboard/finance" className="block py-2 px-3 rounded hover:bg-slate-50">Finance</Link></li>
          </ul>
        </nav>

        <div className="p-4 border-t text-xs text-slate-500">
          App v1.0 • {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  );
}

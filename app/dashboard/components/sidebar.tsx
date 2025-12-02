"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4 hidden md:block">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Nuedebri</h2>
        <p className="text-sm text-gray-500">Health Admin</p>
      </div>

      <nav className="space-y-2 text-sm">
        <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-100">Overview</Link>
        <Link href="/dashboard/admin" className="block p-2 rounded hover:bg-gray-100">Admin</Link>
        <Link href="/dashboard/doctor" className="block p-2 rounded hover:bg-gray-100">Doctor</Link>
        <Link href="/dashboard/nurse" className="block p-2 rounded hover:bg-gray-100">Nurse</Link>
        <Link href="/dashboard/patient" className="block p-2 rounded hover:bg-gray-100">Patient</Link>
        <hr className="my-3" />
        <Link href="/" className="block p-2 rounded hover:bg-gray-100">Back to site</Link>
      </nav>
    </aside>
  );
}

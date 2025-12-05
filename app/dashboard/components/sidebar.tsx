// components/sidebar.tsx
import Link from "next/link";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patients", path: "/dashboard/patients" },
    { name: "Cases", path: "/dashboard/cases" },
    { name: "Visits", path: "/dashboard/visits" },
    { name: "Doctors", path: "/dashboard/doctors" },
    { name: "Nurses", path: "/dashboard/nurses" },
    { name: "Finance", path: "/dashboard/finance" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 space-y-4">
      <h2 className="text-xl font-bold">Nuedebri Health</h2>
      <nav className="flex flex-col space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="px-3 py-2 rounded hover:bg-gray-700"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}


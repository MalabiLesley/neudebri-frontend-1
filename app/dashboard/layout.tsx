import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./../../globals.css";

export const metadata = {
  title: "Nuedebri Dashboard",
  description: "Admin and clinical dashboards for Nuedebri",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

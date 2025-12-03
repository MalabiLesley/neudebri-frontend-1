// app/dashboard/layout.tsx
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

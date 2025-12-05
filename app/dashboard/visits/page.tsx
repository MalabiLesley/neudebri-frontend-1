"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function VisitsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Patient Visits</h1>
      <p className="text-gray-600">Overview of all patient hospital visits.</p>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Recent Visits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Visit ID</th>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Doctor</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">VS-001</td>
                  <td className="p-3">John Doe</td>
                  <td className="p-3">Dr. Smith</td>
                  <td className="p-3">2025-01-10</td>
                  <td className="p-3">Completed</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">VS-002</td>
                  <td className="p-3">Jane M.</td>
                  <td className="p-3">Dr. Collins</td>
                  <td className="p-3">2025-01-12</td>
                  <td className="p-3">Ongoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


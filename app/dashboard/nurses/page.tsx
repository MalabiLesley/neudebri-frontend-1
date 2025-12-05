"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NursesPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Nurses</h1>
      <p className="text-gray-600">Track nursing staff and ward allocations.</p>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Nurses List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Nurse ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Ward</th>
                  <th className="p-3">Shift</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">NR-021</td>
                  <td className="p-3">Nurse Angela</td>
                  <td className="p-3">Maternity</td>
                  <td className="p-3">Day</td>
                  <td className="p-3">Active</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">NR-033</td>
                  <td className="p-3">Nurse Kelvin</td>
                  <td className="p-3">ICU</td>
                  <td className="p-3">Night</td>
                  <td className="p-3">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


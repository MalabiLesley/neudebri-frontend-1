"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DoctorsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Doctors</h1>
      <p className="text-gray-600">Manage and view doctor profiles.</p>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Doctors List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Doctor ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Specialization</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">DR-101</td>
                  <td className="p-3">Dr. Brian Smith</td>
                  <td className="p-3">Cardiology</td>
                  <td className="p-3">0712-345-678</td>
                  <td className="p-3">Available</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">DR-114</td>
                  <td className="p-3">Dr. Sophia Collins</td>
                  <td className="p-3">Pediatrics</td>
                  <td className="p-3">0798-654-321</td>
                  <td className="p-3">On Leave</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

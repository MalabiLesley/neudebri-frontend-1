"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function FinancePage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Finance</h1>
      <p className="text-gray-600">Financial overview of billing, expenses, and payments.</p>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Transaction ID</th>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">TX-101</td>
                  <td className="p-3">John Doe</td>
                  <td className="p-3">KES 4,500</td>
                  <td className="p-3">Payment</td>
                  <td className="p-3">2025-01-11</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">TX-145</td>
                  <td className="p-3">Sarah A.</td>
                  <td className="p-3">KES 2,000</td>
                  <td className="p-3">Invoice</td>
                  <td className="p-3">2025-01-13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


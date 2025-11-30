import React from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface StatusCardProps {
  status: {
    message?: string;
    environment?: string;
  } | null;
}

const StatusCard: React.FC<StatusCardProps> = ({ status }) => {
  const isConnected = status && status.message && status.message !== "Backend unreachable";

  return (
    <div className="mt-8 w-full max-w-md">
      <div
        className={`rounded-xl border shadow-sm p-6 flex flex-col items-center space-y-4
        ${isConnected ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}`}
      >
        {isConnected ? (
          <CheckCircle className="w-12 h-12 text-green-600" />
        ) : (
          <XCircle className="w-12 h-12 text-red-600" />
        )}

        <h2 className="text-2xl font-bold text-gray-800">Backend Status</h2>

        <p className="text-gray-700 text-lg font-medium">
          {status?.message ?? "No message"}
        </p>

        <div className="text-sm text-gray-600">
          <span className="font-semibold">Environment:</span>{" "}
          {status?.environment ?? "Unknown"}
        </div>
      </div>
    </div>
  );
};

export default StatusCard;

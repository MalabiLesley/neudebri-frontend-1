import React from "react";

interface StatusCardProps {
  status: any; // can refine to { message: string; environment: string }
}

const StatusCard: React.FC<StatusCardProps> = ({ status }) => {
  if (!status) {
    return (
      <div className="mt-8 p-4 bg-gray-200 rounded-lg border w-full">
        <p>No status available</p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 bg-white shadow rounded-lg border w-full">
      <h2 className="font-semibold text-xl">Backend Connection</h2>
      <p className="mt-2 text-gray-800">{status.message ?? "No message"}</p>
      <p className="text-sm text-gray-500 mt-2">
        Env: {status.environment ?? "Unknown"}
      </p>
    </div>
  );
};

export default StatusCard;

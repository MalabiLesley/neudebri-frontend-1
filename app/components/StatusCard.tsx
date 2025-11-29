import React from "react";

interface StatusCardProps {
  message: string;
  environment: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ message, environment }) => {
  return (
    <div className="mt-8 p-4 bg-white shadow rounded-lg border w-full">
      <h2 className="font-semibold text-xl">Backend Connection</h2>
      <p className="mt-2 text-gray-800">{message}</p>
      <p className="text-sm text-gray-500 mt-2">Env: {environment}</p>
    </div>
  );
};

export default StatusCard;
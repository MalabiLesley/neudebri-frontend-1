// components/ui/card.tsx
import React from "react";

export function Card({ className = "", children }: any) {
  return (
    <div className={`rounded-xl border p-4 shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: any) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }: any) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function CardContent({ children }: any) {
  return <div className="text-sm text-gray-700">{children}</div>;
}

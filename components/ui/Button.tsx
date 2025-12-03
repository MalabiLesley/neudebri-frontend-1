// components/ui/button.tsx
import React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

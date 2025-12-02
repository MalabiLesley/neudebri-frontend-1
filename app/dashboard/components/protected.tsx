"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Very small client-side protection:
 * - If a token named "neudebri_token" is not present, redirect to /login
 * - Replace with real server-side/session checks later
 */
export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("neudebri_token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/AuthProvider";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err:any) {
      setError(err?.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
        {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
        <label className="block mb-2 text-sm">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full mb-3 p-2 border rounded" />
        <label className="block mb-2 text-sm">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        <button className="w-full py-2 bg-primary-500 text-white rounded">Login</button>
      </form>
    </div>
  );
}


"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../utils/api";

type AuthContextType = {
  user: any | null;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  loading: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("nd_token");
    if (token) {
      api
        .get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => {
          localStorage.removeItem("nd_token");
          setUser(null);
        });
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/auth/login", { email, password });
      const token = res.data.access_token || res.data.token;
      if (token) {
        localStorage.setItem("nd_token", token);
        const me = await api.get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(me.data);
      }
      return res.data;
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("nd_token");
    setUser(null);
    // optionally call backend logout endpoint
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

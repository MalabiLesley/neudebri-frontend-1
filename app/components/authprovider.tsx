"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "utils/api";

type AuthContextType = {
  user: any | null;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("nd_token");
    if (token) {
      // optionally fetch user profile
      api.get("/api/auth/me").then(res => setUser(res.data)).catch(()=> setUser(null));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await api.post("/api/auth/login", { email, password });
      const token = res.data.access_token || res.data.token;
      if (token) {
        localStorage.setItem("nd_token", token);
        // fetch profile
        const me = await api.get("/api/auth/me");
        setUser(me.data);
      }
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("nd_token");
    setUser(null);
    // optionally hit logout endpoint
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

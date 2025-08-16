import React, { createContext, useContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "buyer" | "seller";
  needsOnboarding: boolean;
  profile?: any;
}

interface AuthContextType {
  user: User | null;
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
  login: (email: string, role: "buyer" | "seller") => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [currentRoute, setCurrentRoute] = useState("landing");

  const login = (email: string, role: "buyer" | "seller") => {
    setUser({
      id: Math.random().toString(),
      name: email.split("@")[0],
      email,
      role,
      needsOnboarding: true,
    });
  };

  const logout = () => {
    setUser(null);
    setCurrentRoute("landing");
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        currentRoute,
        setCurrentRoute,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

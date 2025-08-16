import React, { useState } from "react";
import {
  Handshake,
  Home,
  Users,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface NavigationProps {
  onNavigate: (route: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const { user, logout, currentRoute } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "matching", label: "Matching", icon: Users },
    { id: "acquisition", label: "Deals", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Handshake className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-gray-900">DealFlow</span>
            <span className="text-sm bg-teal-100 text-teal-700 px-2 py-1 rounded-full capitalize hidden sm:inline-block">
              {user?.role}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  currentRoute === item.id
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* User Menu (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                {user?.name[0].toUpperCase()}
              </div>
              <span className="font-medium text-gray-900">{user?.name}</span>
            </div>
            <button
              onClick={logout}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Slide-in Panel */}
          <div className="relative w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <Handshake className="h-7 w-7 text-teal-600" />
                <span className="text-xl font-bold text-gray-900">
                  DealFlow
                </span>
              </div>
              <button
                className="p-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    currentRoute === item.id
                      ? "bg-teal-50 text-teal-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* User + Logout */}
            <div className="absolute bottom-0 w-full border-t p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name[0].toUpperCase()}
                </div>
                <span className="font-medium text-gray-900">{user?.name}</span>
              </div>
              <button
                onClick={logout}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

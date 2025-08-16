import React, { useState } from "react";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  Trash2,
} from "lucide-react";
import { Navigation } from "./Navigation";
import { useAuth } from "../contexts/AuthContext";

interface SettingsProps {
  onNavigate: (route: string) => void;
}

export function Settings({ onNavigate }: SettingsProps) {
  const { user, updateUser } = useAuth();
  const [activeSection, setActiveSection] = useState("profile");

  const sections = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy & Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "support", label: "Support", icon: HelpCircle },
  ];

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Industries",
    bio: "Experienced business professional looking for strategic acquisitions in the technology sector.",
    ...user?.profile,
  });

  const [notifications, setNotifications] = useState({
    emailMatches: true,
    emailMessages: true,
    emailDeals: true,
    pushMatches: true,
    pushMessages: true,
    pushDeals: false,
  });

  const handleProfileSave = () => {
    updateUser({ profile: { ...user?.profile, ...profile } });
    // Show success message
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">
            Manage your account preferences and platform settings
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? "bg-teal-50 text-teal-700 border-r-2 border-teal-500"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Settings */}
            {activeSection === "profile" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Profile Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {user?.name[0]?.toUpperCase()}
                    </div>
                    <div>
                      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                        Change Photo
                      </button>
                      <p className="text-gray-600 text-sm mt-1">
                        JPG, GIF or PNG. 1MB max.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) =>
                          setProfile({ ...profile, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({ ...profile, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) =>
                          setProfile({ ...profile, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={profile.company}
                        onChange={(e) =>
                          setProfile({ ...profile, company: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Tell others about yourself and your business interests..."
                    />
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Cancel
                    </button>
                    <button
                      onClick={handleProfileSave}
                      className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeSection === "notifications" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Notification Preferences
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Email Notifications
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          key: "emailMatches",
                          label: "New Matches",
                          description:
                            "Get notified when new buyers/sellers match your criteria",
                        },
                        {
                          key: "emailMessages",
                          label: "Messages",
                          description:
                            "Receive notifications for new messages and replies",
                        },
                        {
                          key: "emailDeals",
                          label: "Deal Updates",
                          description:
                            "Stay updated on the progress of your active deals",
                        },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium text-gray-900">
                              {item.label}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {item.description}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              setNotifications({
                                ...notifications,
                                [item.key]: !notifications[item.key],
                              })
                            }
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              notifications[item.key]
                                ? "bg-teal-600"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                notifications[item.key]
                                  ? "translate-x-6"
                                  : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Push Notifications
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          key: "pushMatches",
                          label: "New Matches",
                          description:
                            "Instant notifications for potential matches",
                        },
                        {
                          key: "pushMessages",
                          label: "Messages",
                          description: "Real-time message notifications",
                        },
                        {
                          key: "pushDeals",
                          label: "Deal Updates",
                          description: "Critical deal milestone notifications",
                        },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium text-gray-900">
                              {item.label}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {item.description}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              setNotifications({
                                ...notifications,
                                [item.key]: !notifications[item.key],
                              })
                            }
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors 
                              ${
                                notifications[item.key]
                                  ? "bg-teal-600"
                                  : "bg-gray-300"
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                notifications[item.key]
                                  ? "translate-x-6"
                                  : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy & Security */}
            {activeSection === "privacy" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Privacy & Security
                </h2>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Password
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Last updated 3 months ago
                    </p>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                      Change Password
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Add an extra layer of security to your account
                    </p>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Data Privacy
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Control how your information is shared with potential
                      matches
                    </p>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                          defaultChecked
                        />
                        <span className="ml-3 text-gray-700">
                          Show my business location to matches
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                          defaultChecked
                        />
                        <span className="ml-3 text-gray-700">
                          Allow contact information sharing after match
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-3 text-gray-700">
                          Include my profile in AI matching suggestions
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing */}
            {activeSection === "billing" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Billing & Subscription
                </h2>

                <div className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-teal-900">
                          Professional Plan
                        </h3>
                        <p className="text-teal-700 text-sm">
                          $99/month • Renews on March 15, 2025
                        </p>
                      </div>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Billing History
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          date: "Feb 15, 2025",
                          amount: "$99.00",
                          status: "Paid",
                        },
                        {
                          date: "Jan 15, 2025",
                          amount: "$99.00",
                          status: "Paid",
                        },
                        {
                          date: "Dec 15, 2024",
                          amount: "$99.00",
                          status: "Paid",
                        },
                      ].map((bill, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-gray-900">
                              {bill.date}
                            </div>
                            <div className="text-gray-600 text-sm">
                              Professional Plan
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="font-semibold text-gray-900">
                              {bill.amount}
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                              {bill.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                      Update Payment Method
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Download Invoice
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Support */}
            {activeSection === "support" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Support
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        title: "Help Center",
                        description: "Browse our knowledge base and FAQs",
                        action: "Visit Help Center",
                      },
                      {
                        title: "Contact Support",
                        description: "Get help from our expert support team",
                        action: "Contact Us",
                      },
                      {
                        title: "Feature Requests",
                        description: "Suggest new features or improvements",
                        action: "Submit Request",
                      },
                      {
                        title: "API Documentation",
                        description: "Integration guides for developers",
                        action: "View Docs",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>
                        <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                          {item.action} →
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-red-900">
                          Danger Zone
                        </h3>
                        <p className="text-red-700 text-sm">
                          Permanently delete your account and all associated
                          data
                        </p>
                      </div>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                        <Trash2 className="h-4 w-4" />
                        <span>Delete Account</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

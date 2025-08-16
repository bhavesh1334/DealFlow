import {
  Heart,
  MessageSquare,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  FileText,
  Settings,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Navigation } from "./Navigation";
import { recentActivity, sellerStats, buyerStats } from "../data/dashboard";

interface DashboardProps {
  onNavigate: (route: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const { user } = useAuth();
  const isSeller = user?.role === "seller";

  const stats = isSeller ? sellerStats : buyerStats;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            {isSeller
              ? "Here's how your business listing is performing"
              : "Here's your acquisition activity overview"}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              {(isSeller
                ? [
                    {
                      label: "Find Buyers",
                      action: () => onNavigate("matching"),
                      icon: Users,
                    },
                    {
                      label: "Update Business Info",
                      action: () => onNavigate("settings"),
                      icon: Settings,
                    },
                    {
                      label: "View Analytics",
                      action: () => {},
                      icon: TrendingUp,
                    },
                    {
                      label: "Manage Documents",
                      action: () => {},
                      icon: FileText,
                    },
                  ]
                : [
                    {
                      label: "Browse Businesses",
                      action: () => onNavigate("matching"),
                      icon: Users,
                    },
                    {
                      label: "Update Criteria",
                      action: () => onNavigate("settings"),
                      icon: Settings,
                    },
                    {
                      label: "Active Deals",
                      action: () => onNavigate("acquisition"),
                      icon: DollarSign,
                    },
                    { label: "Saved Searches", action: () => {}, icon: Heart },
                  ]
              ).map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                >
                  <action.icon className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${activity.color}`}>
                    {activity.type === "match" && <Users className="h-4 w-4" />}
                    {activity.type === "message" && (
                      <MessageSquare className="h-4 w-4" />
                    )}
                    {activity.type === "document" && (
                      <FileText className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {activity.subtitle}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-teal-600 to-orange-600 rounded-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                {isSeller
                  ? "Ready to Find Your Buyer?"
                  : "Ready to Find Your Next Acquisition?"}
              </h3>
              <p className="text-teal-100">
                {isSeller
                  ? "Browse qualified buyers who match your business profile"
                  : "Discover businesses that match your investment criteria"}
              </p>
            </div>
            <button
              onClick={() => onNavigate("matching")}
              className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Matching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

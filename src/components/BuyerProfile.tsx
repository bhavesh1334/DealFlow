import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Users,
  Award,
  Building,
  Target,
  Clock,
} from "lucide-react";
import { Navigation } from "./Navigation";

interface BuyerProfileProps {
  buyer: any;
  onNavigate: (route: string) => void;
}

export function BuyerProfile({ buyer, onNavigate }: BuyerProfileProps) {
  if (!buyer) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <button
          onClick={() => onNavigate("matching")}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Matching
        </button>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-bold">
                {buyer.avatar}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{buyer.name}</h1>
                <p className="text-teal-100 text-xl">{buyer.type}</p>
                <div className="flex items-center mt-2 text-teal-100">
                  <MapPin className="h-5 w-5 mr-2" />
                  {buyer.location}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-lg font-semibold mb-2">
                {buyer.compatibility}% Match
              </div>
              <p className="text-teal-100">Compatibility Score</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {buyer.description}
              </p>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Investment Focus
                </h3>
                <p className="text-gray-700 mb-4">{buyer.investmentFocus}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Preferred Business Size
                    </h4>
                    <p className="text-gray-700">{buyer.preferredSize}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Investment Timeline
                    </h4>
                    <p className="text-gray-700">{buyer.timeline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Industries */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Target Industries
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {buyer.targetIndustries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-teal-50 text-teal-700 px-4 py-3 rounded-lg text-center font-medium"
                  >
                    ƒ{industry}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Recent Deals */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Experience & Track Record
              </h2>

              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-teal-600" />
                  <h3 className="font-semibold text-gray-900">
                    Acquisition Experience
                  </h3>
                </div>
                <p className="text-gray-700">{buyer.experience}</p>
              </div>

              {buyer.recentDeals.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Recent Acquisitions
                  </h3>
                  <div className="space-y-3">
                    {buyer.recentDeals.map((deal, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <Building className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">{deal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-gray-600">Available Capital</p>
                    <p className="font-semibold">{buyer.capital}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-gray-600">Experience Level</p>
                    <p className="font-semibold">{buyer.experience}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-gray-600">Timeline</p>
                    <p className="font-semibold">{buyer.timeline}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-gray-600">
                      Business Size Preference
                    </p>
                    <p className="font-semibold">{buyer.preferredSize}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Take Action
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                  Connect with Buyer
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Save for Later
                </button>
                <button
                  onClick={() => onNavigate("acquisition")}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Start Deal Process
                </button>
              </div>
            </div>

            {/* Compatibility Breakdown */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why This Match?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Industry Alignment",
                    score: 95,
                    color: "bg-green-500",
                  },
                  { label: "Size Preference", score: 88, color: "bg-teal-500" },
                  { label: "Geographic Fit", score: 92, color: "bg-blue-500" },
                  {
                    label: "Timeline Match",
                    score: 90,
                    color: "bg-purple-500",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {item.score}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Handshake, ArrowRight, Users, Zap, Shield, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LandingPageProps {
  onNavigate: (route: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const { login } = useAuth();
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'buyer' | 'seller'>('seller');

  const handleSignup = () => {
    if (email) {
      login(email, role);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Handshake className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-gray-900">DealFlow</span>
          </div>
          <button 
            onClick={() => setShowSignup(true)}
            className="px-4 py-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Where Business Dreams
            <br />
            <span className="text-teal-600">Meet Their Match</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The first platform where sellers discover buyers, not the other way around. 
            We're flipping the script on business acquisitions with AI-powered matching and streamlined deals.
          </p>
          <button 
            onClick={() => setShowSignup(true)}
            className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors flex items-center mx-auto group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Seller-First Matching",
              description: "Sellers discover and connect with qualified buyers who match their criteria"
            },
            {
              icon: Zap,
              title: "AI-Powered Process",
              description: "Smart document analysis, deal tracking, and automated workflows"
            },
            {
              icon: Shield,
              title: "Secure & Trusted",
              description: "Bank-level security with verified profiles and protected communications"
            },
            {
              icon: TrendingUp,
              title: "Higher Success Rates",
              description: "Our guided process increases deal completion by 3x industry average"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-12">How DealFlow Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Complete our intelligent onboarding to showcase your business or investment criteria",
                color: "bg-teal-100 text-teal-600"
              },
              {
                step: "02", 
                title: "Smart Matching",
                description: "Our AI connects sellers with buyers based on industry, size, location, and investment preferences",
                color: "bg-orange-100 text-orange-600"
              },
              {
                step: "03",
                title: "Guided Acquisition",
                description: "Follow our streamlined workflow with AI-powered tools to close deals faster and more successfully",
                color: "bg-purple-100 text-purple-600"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold mb-4 ${step.color}`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Join DealFlow</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'seller', label: 'Business Seller', desc: 'I want to sell my business' },
                  { value: 'buyer', label: 'Business Buyer', desc: 'I want to acquire businesses' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setRole(option.value as 'buyer' | 'seller')}
                    className={`p-4 rounded-lg border-2 text-left transition-colors ${
                      role === option.value 
                        ? 'border-teal-600 bg-teal-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-sm">{option.label}</div>
                    <div className="text-xs text-gray-600 mt-1">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowSignup(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSignup}
                disabled={!email}
                className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
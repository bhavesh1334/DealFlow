import React, { useState } from 'react';
import { Heart, X, MapPin, DollarSign, Users, Calendar, ChevronRight, Filter } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Navigation } from './Navigation';

interface MatchingInterfaceProps {
  onNavigate: (route: string, data?: any) => void;
}

export function MatchingInterface({ onNavigate }: MatchingInterfaceProps) {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSeller = user?.role === 'seller';

  // Sample data - in real app this would come from API
  const buyers = [
    {
      id: 1,
      name: 'TechCorp Ventures',
      type: 'Private Equity',
      location: 'San Francisco, CA',
      capital: '$50M+',
      experience: '10+ acquisitions',
      targetIndustries: ['Technology', 'SaaS', 'E-commerce'],
      preferredSize: '$5M-$20M revenue',
      timeline: '3-6 months',
      avatar: 'TC',
      description: 'Focused on growth-stage tech companies with strong unit economics and recurring revenue models.',
      recentDeals: ['CloudTech Solutions ($12M)', 'DataFlow Inc ($8M)'],
      investmentFocus: 'B2B SaaS with $5M+ ARR',
      compatibility: 92
    },
    {
      id: 2,
      name: 'Regional Growth Partners',
      type: 'Investment Group',
      location: 'Austin, TX',
      capital: '$10M-$25M',
      experience: '5-10 acquisitions',
      targetIndustries: ['Manufacturing', 'Healthcare', 'Services'],
      preferredSize: '$2M-$10M revenue',
      timeline: '6-12 months',
      avatar: 'RG',
      description: 'Regional investors focused on profitable, established businesses with growth potential.',
      recentDeals: ['MedSupply Co ($6M)', 'Austin Manufacturing ($4M)'],
      investmentFocus: 'Profitable businesses with local presence',
      compatibility: 85
    },
    {
      id: 3,
      name: 'Sarah Chen',
      type: 'Individual Investor',
      location: 'Seattle, WA',
      capital: '$2M-$5M',
      experience: 'First-time buyer',
      targetIndustries: ['E-commerce', 'Retail', 'Consumer Goods'],
      preferredSize: '$1M-$3M revenue',
      timeline: 'Ready to close ASAP',
      avatar: 'SC',
      description: 'Former tech executive looking to acquire and operate a consumer-focused business.',
      recentDeals: [],
      investmentFocus: 'Owner-operator opportunities',
      compatibility: 78
    }
  ];

  const businesses = [
    {
      id: 1,
      name: 'CloudSync Solutions',
      industry: 'Technology',
      location: 'Denver, CO',
      revenue: '$3.2M ARR',
      employees: '12',
      yearFounded: '2019',
      askingPrice: '$12M',
      reason: 'Retirement',
      avatar: 'CS',
      description: 'B2B SaaS platform for file synchronization with 200+ enterprise clients.',
      highlights: ['98% customer retention', 'Growing 40% YoY', 'Profitable for 2 years'],
      ownerInvolvement: 'Strategic oversight preferred',
      compatibility: 94
    },
    {
      id: 2,
      name: 'Artisan Coffee Co.',
      industry: 'Food & Beverage',
      location: 'Portland, OR',
      revenue: '$2.8M annually',
      employees: '25',
      yearFounded: '2015',
      askingPrice: '$4.5M',
      reason: 'New opportunities',
      avatar: 'AC',
      description: 'Premium coffee roaster with 3 retail locations and growing e-commerce business.',
      highlights: ['Strong local brand', 'E-commerce growing 60% YoY', 'Experienced team'],
      ownerInvolvement: 'Flexible transition',
      compatibility: 87
    }
  ];

  const currentProfiles = isSeller ? buyers : businesses;
  const currentProfile = currentProfiles[currentIndex];

  const handlePass = () => {
    if (currentIndex < currentProfiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleMatch = () => {
    // In real app, this would create a match in the backend
    if (currentIndex < currentProfiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleViewProfile = () => {
    if (isSeller) {
      onNavigate('buyer-profile', { buyer: currentProfile });
    } else {
      // Navigate to business profile
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isSeller ? 'Discover Buyers' : 'Discover Businesses'}
          </h1>
          <p className="text-gray-600">
            {isSeller 
              ? 'Swipe through qualified buyers interested in businesses like yours'
              : 'Browse businesses that match your investment criteria'
            }
          </p>
        </div>

        {/* Matching Interface */}
        <div className="relative max-w-2xl mx-auto">
          {/* Card Stack Background */}
          <div className="absolute inset-0 transform rotate-1 bg-white rounded-2xl shadow-sm opacity-30"></div>
          <div className="absolute inset-0 transform -rotate-1 bg-white rounded-2xl shadow-sm opacity-60"></div>
          
          {/* Main Card */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Compatibility Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {currentProfile.compatibility}% Match
              </div>
            </div>

            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
                  {currentProfile.avatar}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{currentProfile.name}</h2>
                  <p className="text-teal-100">
                    {isSeller ? currentProfile.type : currentProfile.industry}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                {currentProfile.description}
              </p>

              {/* Key Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Location</span>
                  </div>
                  <p className="font-semibold">{currentProfile.location}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">
                      {isSeller ? 'Available Capital' : 'Revenue'}
                    </span>
                  </div>
                  <p className="font-semibold">
                    {isSeller ? currentProfile.capital : currentProfile.revenue}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
                      {isSeller ? 'Experience' : 'Employees'}
                    </span>
                  </div>
                  <p className="font-semibold">
                    {isSeller ? currentProfile.experience : currentProfile.employees}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Timeline</span>
                  </div>
                  <p className="font-semibold">
                    {isSeller ? currentProfile.timeline : `Est. ${currentProfile.yearFounded}`}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              {(isSeller ? currentProfile.targetIndustries : currentProfile.highlights) && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {isSeller ? 'Target Industries' : 'Key Highlights'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(isSeller ? currentProfile.targetIndustries : currentProfile.highlights).map((item, index) => (
                      <span
                        key={index}
                        className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isSeller ? 'Investment Focus' : 'Asking Price'}
                  </h4>
                  <p className="text-gray-700">
                    {isSeller ? currentProfile.investmentFocus : currentProfile.askingPrice}
                  </p>
                </div>
                
                {isSeller && currentProfile.recentDeals.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recent Deals</h4>
                    <div className="space-y-1">
                      {currentProfile.recentDeals.map((deal, index) => (
                        <p key={index} className="text-gray-700 text-sm">{deal}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* View Full Profile Button */}
              <button
                onClick={handleViewProfile}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center group"
              >
                View Full Profile
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="p-6 bg-gray-50 flex space-x-4">
              <button
                onClick={handlePass}
                className="flex-1 flex items-center justify-center py-4 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors group"
              >
                <X className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
                Pass
              </button>
              <button
                onClick={handleMatch}
                className="flex-1 flex items-center justify-center py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors group"
              >
                <Heart className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
                Interested
              </button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="text-center mt-6 text-gray-500">
            {currentIndex + 1} of {currentProfiles.length}
          </div>
        </div>

        {/* Filter Options */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Filter className="h-4 w-4 mr-2" />
            Refine Filters
          </button>
        </div>
      </div>
    </div>
  );
}
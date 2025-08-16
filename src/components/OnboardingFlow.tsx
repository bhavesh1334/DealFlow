import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const { user, updateUser } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const isSeller = user?.role === 'seller';
  
  const sellerSteps = [
    {
      title: "About Your Business",
      questions: [
        {
          id: 'businessName',
          label: 'Business Name',
          type: 'text',
          placeholder: 'Enter your business name'
        },
        {
          id: 'industry',
          label: 'Industry',
          type: 'select',
          options: ['Technology', 'Healthcare', 'Manufacturing', 'Retail', 'Services', 'Other']
        },
        {
          id: 'yearsInBusiness',
          label: 'Years in Business',
          type: 'select',
          options: ['0-2 years', '3-5 years', '6-10 years', '11-20 years', '20+ years']
        }
      ]
    },
    {
      title: "Business Details",
      questions: [
        {
          id: 'revenue',
          label: 'Annual Revenue Range',
          type: 'select',
          options: ['Under $500K', '$500K-$1M', '$1M-$5M', '$5M-$10M', '$10M-$50M', '$50M+']
        },
        {
          id: 'employees',
          label: 'Number of Employees',
          type: 'select',
          options: ['1-5', '6-25', '26-100', '101-500', '500+']
        },
        {
          id: 'location',
          label: 'Primary Location',
          type: 'text',
          placeholder: 'City, State/Country'
        }
      ]
    },
    {
      title: "Sale Motivation",
      questions: [
        {
          id: 'sellingReason',
          label: 'Primary reason for selling',
          type: 'select',
          options: ['Retirement', 'New opportunities', 'Market conditions', 'Health reasons', 'Partnership exit', 'Other']
        },
        {
          id: 'timeline',
          label: 'Ideal timeline for sale',
          type: 'select',
          options: ['ASAP', '3-6 months', '6-12 months', '1-2 years', 'Flexible']
        },
        {
          id: 'askingPrice',
          label: 'Expected price range',
          type: 'select',
          options: ['Under $500K', '$500K-$1M', '$1M-$5M', '$5M-$10M', '$10M+', 'Open to offers']
        }
      ]
    }
  ];

  const buyerSteps = [
    {
      title: "Investment Profile",
      questions: [
        {
          id: 'investorType',
          label: 'Investor Type',
          type: 'select',
          options: ['Individual Investor', 'Investment Group', 'Private Equity', 'Strategic Buyer', 'Family Office']
        },
        {
          id: 'experience',
          label: 'Acquisition Experience',
          type: 'select',
          options: ['First-time buyer', '1-3 acquisitions', '4-10 acquisitions', '10+ acquisitions']
        },
        {
          id: 'capitalAvailable',
          label: 'Available Capital',
          type: 'select',
          options: ['Under $500K', '$500K-$1M', '$1M-$5M', '$5M-$10M', '$10M+']
        }
      ]
    },
    {
      title: "Investment Criteria",
      questions: [
        {
          id: 'targetIndustries',
          label: 'Target Industries (select all that apply)',
          type: 'multiselect',
          options: ['Technology', 'Healthcare', 'Manufacturing', 'Retail', 'Services', 'Real Estate', 'Other']
        },
        {
          id: 'preferredSize',
          label: 'Preferred Business Size',
          type: 'select',
          options: ['Under $1M revenue', '$1M-$5M revenue', '$5M-$10M revenue', '$10M+ revenue']
        },
        {
          id: 'geography',
          label: 'Geographic Preference',
          type: 'select',
          options: ['Local only', 'Regional', 'National', 'International', 'No preference']
        }
      ]
    },
    {
      title: "Investment Goals",
      questions: [
        {
          id: 'involvement',
          label: 'Desired involvement level',
          type: 'select',
          options: ['Hands-on management', 'Strategic oversight', 'Passive investment', 'Exit-focused']
        },
        {
          id: 'timeline',
          label: 'Investment timeline',
          type: 'select',
          options: ['Ready to close ASAP', '1-3 months', '3-6 months', '6-12 months', 'Just exploring']
        },
        {
          id: 'dealStructure',
          label: 'Preferred deal structure',
          type: 'select',
          options: ['Asset purchase', 'Stock purchase', 'Merger', 'Partnership', 'Open to discussion']
        }
      ]
    }
  ];

  const steps = isSeller ? sellerSteps : buyerSteps;

  const handleInputChange = (questionId: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      updateUser({
        needsOnboarding: false,
        profile: formData
      });
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full overflow-hidden">
        {/* Progress Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">
              {isSeller ? 'Seller' : 'Buyer'} Onboarding
            </h1>
            <span className="text-teal-100">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="w-full bg-teal-500 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentStepData.title}</h2>
          
          <div className="space-y-6">
            {currentStepData.questions.map((question) => (
              <div key={question.id}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {question.label}
                </label>
                
                {question.type === 'text' && (
                  <input
                    type="text"
                    value={formData[question.id] || ''}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    placeholder={question.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                )}

                {question.type === 'select' && (
                  <select
                    value={formData[question.id] || ''}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">Select an option</option>
                    {question.options?.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                )}

                {question.type === 'multiselect' && (
                  <div className="grid grid-cols-2 gap-3">
                    {question.options?.map((option) => {
                      const isSelected = (formData[question.id] as string[] || []).includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            const current = formData[question.id] as string[] || [];
                            const updated = isSelected 
                              ? current.filter(item => item !== option)
                              : [...current, option];
                            handleInputChange(question.id, updated);
                          }}
                          className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                            isSelected
                              ? 'border-teal-600 bg-teal-50 text-teal-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {isSelected && <Check className="inline h-4 w-4 mr-1" />}
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-50 px-8 py-4 flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
            {currentStep < steps.length - 1 && <ChevronRight className="h-4 w-4 ml-1" />}
          </button>
        </div>
      </div>
    </div>
  );
}
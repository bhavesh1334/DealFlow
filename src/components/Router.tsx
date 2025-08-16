import React, { useState } from 'react';
import { LandingPage } from './LandingPage';
import { OnboardingFlow } from './OnboardingFlow';
import { Dashboard } from './Dashboard';
import { MatchingInterface } from './MatchingInterface';
import { BuyerProfile } from './BuyerProfile';
import { AcquisitionWorkflow } from './AcquisitionWorkflow';
import { Settings } from './Settings';
import { useAuth } from '../contexts/AuthContext';

export function Router() {
  const { user, currentRoute, setCurrentRoute } = useAuth();
  const [selectedBuyer, setSelectedBuyer] = useState(null);

  const handleRouteChange = (route: string, data?: any) => {
    setCurrentRoute(route);
    if (data?.buyer) {
      setSelectedBuyer(data.buyer);
    }
  };

  if (!user) {
    return <LandingPage onNavigate={handleRouteChange} />;
  }

  if (user.needsOnboarding) {
    return <OnboardingFlow onComplete={() => handleRouteChange('dashboard')} />;
  }

  switch (currentRoute) {
    case 'dashboard':
      return <Dashboard onNavigate={handleRouteChange} />;
    case 'matching':
      return <MatchingInterface onNavigate={handleRouteChange} />;
    case 'buyer-profile':
      return <BuyerProfile buyer={selectedBuyer} onNavigate={handleRouteChange} />;
    case 'acquisition':
      return <AcquisitionWorkflow onNavigate={handleRouteChange} />;
    case 'settings':
      return <Settings onNavigate={handleRouteChange} />;
    default:
      return <Dashboard onNavigate={handleRouteChange} />;
  }
}
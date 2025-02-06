import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import PersonalInfo from './components/PersonalInfo';
import AcademicInfo from './components/AcademicInfo';
import Preferences from './components/Preferences';
import FinancialInfo from './components/FinancialInfo';
import Activities from './components/Activities';
import Goals from './components/Goals';
import AdditionalInfo from './components/AdditionalInfo';
import DocumentUpload from './components/DocumentUpload';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo onNext={nextStep} />;
      case 2:
        return <AcademicInfo onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <Preferences onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <FinancialInfo onNext={nextStep} onPrev={prevStep} />;
      case 5:
        return <Activities onNext={nextStep} onPrev={prevStep} />;
      case 6:
        return <Goals onNext={nextStep} onPrev={prevStep} />;
      case 7:
        return <AdditionalInfo onNext={nextStep} onPrev={prevStep} />;
      case 8:
        return <DocumentUpload onPrev={prevStep} />;
      default:
        return <PersonalInfo onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <GraduationCap className="w-10 h-10 text-indigo-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-800">EduMatch</h1>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`w-full h-2 rounded-full mx-1 ${
                    index + 1 <= currentStep ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
          
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default App;
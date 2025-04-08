'use client';

import { useFormContext } from '@/context/FormContext';
import PersonalInfoStep from './PersonalInfoStep';
import AddressStep from './AddressStep';
import AccountStep from './AccountStep';
import Summary from './Summary';

const steps = ['Personal Information', 'Address Details', 'Account Setup', 'Summary'];

export default function MultiStepForm() {
  const { currentStep } = useFormContext();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep />;
      case 1:
        return <AddressStep />;
      case 2:
        return <AccountStep />;
      case 3:
        return <Summary />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-gray-100">
      <div className="mb-12">
        <div className="flex justify-between items-center relative">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`flex-1 text-center z-10 ${
                index === currentStep ? 'scale-110 transition-transform duration-300' : ''
              }`}
            >
              <div
                className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center 
                transform rotate-45 transition-all duration-300 
                ${
                  index === currentStep
                    ? 'bg-gradient-to-tr from-[#6366F1] via-[#8B5CF6] to-[#D946EF] shadow-lg shadow-purple-200'
                    : index < currentStep
                    ? 'bg-gradient-to-tr from-[#34D399] via-[#10B981] to-[#059669] shadow-md shadow-green-200'
                    : 'bg-gray-100'
                }`}
              >
                <span className="transform -rotate-45 text-white font-medium">
                  {index < currentStep ? '✓' : index + 1}
                </span>
              </div>
              <div className={`mt-4 text-sm font-medium hidden sm:block transition-colors duration-300
                ${index === currentStep ? 'text-[#8B5CF6]' : 
                  index < currentStep ? 'text-[#10B981]' : 'text-gray-400'}`}>
                {step}
              </div>
            </div>
          ))}
          
          <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-100">
            <div
              className="absolute h-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF]
              transition-all duration-500 ease-in-out rounded-full"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/5 via-[#8B5CF6]/5 to-[#D946EF]/5 rounded-3xl" />
        <div className="relative transition-all duration-300 ease-in-out p-6">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}
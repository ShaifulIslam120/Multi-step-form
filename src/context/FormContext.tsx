'use client';

import React, { createContext, useContext, useState } from 'react';
import { PersonalInfoData, AddressData, AccountData } from '@/lib/validationSchema';

type FormData = {
  personalInfo: PersonalInfoData;
  address: AddressData;
  account: AccountData;
};

type FormContextType = {
  formData: Partial<FormData>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<FormData>>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <FormContext.Provider value={{ formData, setFormData, currentStep, setCurrentStep }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}
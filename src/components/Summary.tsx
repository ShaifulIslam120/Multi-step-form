'use client';

import { useMutation } from '@tanstack/react-query';
import { useFormContext } from '@/context/FormContext';
import { submitFormData, FormData } from '@/lib/api';

export default function Summary() {
  const { formData, setCurrentStep } = useFormContext();
  const { personalInfo, address, account } = formData;

  const mutation = useMutation({
    mutationFn: (data: Partial<FormData>) => submitFormData(data),
    onSuccess: (response) => {
      console.log('Form submitted successfully:', response);
    },
  });

  const handleSubmit = () => {
    mutation.mutate(formData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 relative">
        Summary
        <span className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#D946EF]"></span>
      </h2>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="p-6 space-y-6 divide-y divide-gray-100">
          <div className="animate-[fadeIn_0.3s_ease-in-out]">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#D946EF] text-white flex items-center justify-center text-sm mr-3">1</span>
              Personal Information
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-11">
              <div className="group">
                <dt className="text-sm font-medium text-gray-500 group-hover:text-[#8B5CF6] transition-colors">Full Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{personalInfo?.fullName}</dd>
              </div>
              <div className="group">
                <dt className="text-sm font-medium text-gray-500 group-hover:text-[#8B5CF6] transition-colors">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">{personalInfo?.email}</dd>
              </div>
              <div className="group">
                <dt className="text-sm font-medium text-gray-500 group-hover:text-[#8B5CF6] transition-colors">Phone Number</dt>
                <dd className="mt-1 text-sm text-gray-900">{personalInfo?.phoneNumber}</dd>
              </div>
            </dl>
          </div>

          <div className="pt-6 animate-[fadeIn_0.4s_ease-in-out]">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#D946EF] text-white flex items-center justify-center text-sm mr-3">2</span>
              Address Details
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-11">
              <div className="group">
                <dt className="text-sm font-medium text-gray-500 group-hover:text-[#8B5CF6] transition-colors">Street Address</dt>
                <dd className="mt-1 text-sm text-gray-900">{address?.streetAddress}</dd>
              </div>
              <div className="group">
                <dt className="text-sm font-medium text-gray-500 group-hover:text-[#8B5CF6] transition-colors">City</dt>
                <dd className="mt-1 text-sm text-gray-900">{address?.city}</dd>
              </div>
              <div className="group">
                <dt className="text-sm font-medium text-gray-500 group-hover:text-[#8B5CF6] transition-colors">ZIP Code</dt>
                <dd className="mt-1 text-sm text-gray-900">{address?.zipCode}</dd>
              </div>
            </dl>
          </div>

          <div className="pt-6 animate-[fadeIn_0.5s_ease-in-out]">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#D946EF] text-white flex items-center justify-center text-sm mr-3">3</span>
              Account Details
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-11">
              <div className="group">
                <dt className="text-sm font-medium text-gray-500 group-hover:text-[#8B5CF6] transition-colors">Username</dt>
                <dd className="mt-1 text-sm text-gray-900">{account?.username}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-2">
        <button
          type="button"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="flex-1 bg-gradient-to-r from-gray-600 to-gray-500
            text-white py-3 px-6 rounded-xl font-medium
            hover:shadow-lg hover:shadow-gray-200 hover:-translate-y-0.5
            active:translate-y-0 active:shadow-md
            transition-all duration-300 ease-in-out"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          disabled={mutation.isPending}
          className="flex-1 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF]
            text-white py-3 px-6 rounded-xl font-medium
            hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5
            active:translate-y-0 active:shadow-md disabled:opacity-50 
            disabled:cursor-not-allowed disabled:hover:transform-none
            transition-all duration-300 ease-in-out"
        >
          {mutation.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {mutation.isSuccess && (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 
          shadow-sm animate-[slideIn_0.3s_ease-in-out] flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          Form submitted successfully!
        </div>
      )}

      {mutation.isError && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 
          shadow-sm animate-[slideIn_0.3s_ease-in-out] flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
          </svg>
          Error submitting form. Please try again.
        </div>
      )}
    </div>
  );
}
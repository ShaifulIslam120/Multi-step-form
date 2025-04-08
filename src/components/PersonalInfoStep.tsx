'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema, PersonalInfoData } from '@/lib/validationSchema';
import { useFormContext } from '@/context/FormContext';

export default function PersonalInfoStep() {
  const { formData, setFormData, setCurrentStep } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: formData.personalInfo,
  });

  const onSubmit = (data: PersonalInfoData) => {
    setFormData((prev) => ({ ...prev, personalInfo: data }));
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-[#8B5CF6] transition-colors">
          Full Name
        </label>
        <div className="relative">
          <input
            {...register('fullName')}
            className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm 
              text-gray-900 placeholder:text-gray-400 px-4 py-3
              focus:border-[#8B5CF6] focus:ring focus:ring-[#8B5CF6]/20
              transition-all duration-300 ease-in-out hover:border-[#8B5CF6]/50"
            placeholder="Enter your full name"
          />
          <div className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:scale-105 pointer-events-none" />
        </div>
        {errors.fullName && (
          <p className="mt-1.5 text-sm text-red-500 animate-[slideIn_0.3s_ease-in-out]">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-[#8B5CF6] transition-colors">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm 
              text-gray-900 placeholder:text-gray-400 px-4 py-3
              focus:border-[#8B5CF6] focus:ring focus:ring-[#8B5CF6]/20
              transition-all duration-300 ease-in-out hover:border-[#8B5CF6]/50"
            placeholder="Enter your email"
          />
          <div className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:scale-105 pointer-events-none" />
        </div>
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-500 animate-[slideIn_0.3s_ease-in-out]">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-[#8B5CF6] transition-colors">
          Phone Number
        </label>
        <div className="relative">
          <input
            type="tel"
            {...register('phoneNumber')}
            className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm 
              text-gray-900 placeholder:text-gray-400 px-4 py-3
              focus:border-[#8B5CF6] focus:ring focus:ring-[#8B5CF6]/20
              transition-all duration-300 ease-in-out hover:border-[#8B5CF6]/50"
            placeholder="Enter your phone number"
          />
          <div className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:scale-105 pointer-events-none" />
        </div>
        {errors.phoneNumber && (
          <p className="mt-1.5 text-sm text-red-500 animate-[slideIn_0.3s_ease-in-out]">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF]
          text-white py-3 px-6 rounded-xl font-medium
          hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5
          active:translate-y-0 active:shadow-md
          transition-all duration-300 ease-in-out
          animate-[fadeIn_0.3s_ease-in-out]"
      >
        Next
      </button>
    </form>
  );
}
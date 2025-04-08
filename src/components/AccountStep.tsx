'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountSchema, AccountData } from '@/lib/validationSchema';
import { useFormContext } from '@/context/FormContext';

export default function AccountStep() {
  const { formData, setFormData, setCurrentStep } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountData>({
    resolver: zodResolver(accountSchema),
    defaultValues: formData.account,
  });

  const onSubmit = (data: AccountData) => {
    setFormData((prev) => ({ ...prev, account: data }));
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-[#8B5CF6] transition-colors">
          Username
        </label>
        <div className="relative">
          <input
            {...register('username')}
            className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm 
              text-gray-900 placeholder:text-gray-400 px-4 py-3
              focus:border-[#8B5CF6] focus:ring focus:ring-[#8B5CF6]/20
              transition-all duration-300 ease-in-out hover:border-[#8B5CF6]/50"
            placeholder="Choose your username"
          />
          <div className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:scale-105 pointer-events-none" />
        </div>
        {errors.username && (
          <p className="mt-1.5 text-sm text-red-500 animate-[slideIn_0.3s_ease-in-out]">
            {errors.username.message}
          </p>
        )}
      </div>

      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-[#8B5CF6] transition-colors">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            {...register('password')}
            className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm 
              text-gray-900 placeholder:text-gray-400 px-4 py-3
              focus:border-[#8B5CF6] focus:ring focus:ring-[#8B5CF6]/20
              transition-all duration-300 ease-in-out hover:border-[#8B5CF6]/50"
            placeholder="Enter your password"
          />
          <div className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:scale-105 pointer-events-none" />
        </div>
        {errors.password && (
          <p className="mt-1.5 text-sm text-red-500 animate-[slideIn_0.3s_ease-in-out]">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-1.5 group-focus-within:text-[#8B5CF6] transition-colors">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type="password"
            {...register('confirmPassword')}
            className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm 
              text-gray-900 placeholder:text-gray-400 px-4 py-3
              focus:border-[#8B5CF6] focus:ring focus:ring-[#8B5CF6]/20
              transition-all duration-300 ease-in-out hover:border-[#8B5CF6]/50"
            placeholder="Confirm your password"
          />
          <div className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:scale-105 pointer-events-none" />
        </div>
        {errors.confirmPassword && (
          <p className="mt-1.5 text-sm text-red-500 animate-[slideIn_0.3s_ease-in-out]">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex gap-4 pt-2">
        <button
          type="button"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="w-full bg-gradient-to-r from-gray-600 to-gray-500
            text-white py-3 px-6 rounded-xl font-medium
            hover:shadow-lg hover:shadow-gray-200 hover:-translate-y-0.5
            active:translate-y-0 active:shadow-md
            transition-all duration-300 ease-in-out"
        >
          Previous
        </button>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF]
            text-white py-3 px-6 rounded-xl font-medium
            hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5
            active:translate-y-0 active:shadow-md
            transition-all duration-300 ease-in-out"
        >
          Next
        </button>
      </div>
    </form>
  );
}
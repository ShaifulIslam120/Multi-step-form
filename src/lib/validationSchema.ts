import * as z from 'zod';

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
});

export const addressSchema = z.object({
  streetAddress: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  zipCode: z.string().min(5, 'ZIP code must be at least 5 digits').regex(/^\d+$/, 'ZIP code must contain only numbers'),
});

export const accountSchema = z.object({
  username: z.string().min(4, 'Username must be at least 4 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
export type AddressData = z.infer<typeof addressSchema>;
export type AccountData = z.infer<typeof accountSchema>;
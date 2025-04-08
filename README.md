# Multi-step Form

A modern, responsive multi-step form built with Next.js, React Hook Form, Zod, and TailwindCSS.

## Features

- Multi-step form validation
- Real-time form validation
- Responsive design
- Form data persistence
- API submission simulation
- Modern UI with animations
- TypeScript support
- Dark mode support

## Prerequisites

- Node.js 18.17 or later
- npm or yarn

## Getting Started

1. Clone the repository:
git clone <repository-url>
npm install
npm run dev

Trae AI
Here's a complete guide for your multi-step form project:

README.md
Apply
# Multi-step FormA modern, responsive multi-step form built with Next.js, React Hook Form, Zod, and TailwindCSS.## Features- Multi-step form validation- Real-time form validation- Responsive design- Form data persistence- API submission simulation- Modern UI with animations- TypeScript support- Dark mode support## Prerequisites- Node.js 18.17 or later- npm or yarn## Getting Started1. Clone the repository:```bashgit clone <repository-url>
Install dependencies:
bash
Run
npm install
Run the development server:
bash
Run
npm run dev
Open http://localhost:3000 in your browser.
Project Structure
plaintext

src/├── app/│   ├── globals.css│   ├── layout.tsx│   └── page.tsx├── components/│   ├── forms/│   │   ├── AccountStep.tsx│   │   ├── AddressStep.tsx│   │   ├── PersonalInfoStep.tsx│   │   └── Summary.tsx│   ├── MultiStepForm.tsx│   └── Providers.tsx├── context/│   └── FormContext.tsx├── lib/│   ├── api.ts│   └── validationSchema.ts
Technologies Used
Next.js 14
React Hook Form
Zod Validation
TailwindCSS
TypeScript
React Query
Next Themes
Form Steps
Personal Information

Full Name
Email
Phone Number
Address Details

Street Address
City
ZIP Code
Account Setup

Username
Password
Password Confirmation
Summary

Review all information
Submit form


import MultiStepForm from '@/components/MultiStepForm';
import { FormProvider } from '@/context/FormContext';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-2xl">
        <FormProvider>
          <MultiStepForm />
        </FormProvider>
      </div>
    </main>
  );
}
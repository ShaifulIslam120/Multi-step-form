export type FormData = {
    personalInfo: {
      fullName: string;
      email: string;
      phoneNumber: string;
    };
    address: {
      streetAddress: string;
      city: string;
      zipCode: string;
    };
    account: {
      username: string;
      password: string;
    };
  };
  
  export const submitFormData = async (data: Partial<FormData>): Promise<{ success: boolean; data: Partial<FormData> }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data });
      }, 2000);
    });
  };
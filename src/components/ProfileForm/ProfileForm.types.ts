import { FormEvent } from 'react';

interface FormData {
  name: string;
  birthday: string;
  progrLang: string;
  description: string;
  yearsOfExperience: number;
  isExpert: boolean;
}

interface ProfileFormProps {
  formData: FormData;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: any;
}

export default ProfileFormProps;
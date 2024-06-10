type Teacher = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
};

type ValuesType = {
  subject_id: string;
  subject_name: string;
  grade: number;
  year: number;
  teacher_id: string;
};

export type { Teacher, ValuesType };

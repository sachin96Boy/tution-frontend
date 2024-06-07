type Subject = {
  id: string;
  subject_id: string;
  subject_name: string;
  grade: string;
  year: string;
  teacher_id: string;
  enrollment_fee: number;
  start_date: string;
  end_date: string;
  monthly_fee: number;
};
type TeacherType = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
};

export type { Subject, TeacherType };

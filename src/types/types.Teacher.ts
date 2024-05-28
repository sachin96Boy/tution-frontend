type Subject = {
  id: string;
  subject_id: string;
  subject_name: string;
  grade: string;
  year: string;
};
type TeacherType = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
};

export type { Subject, TeacherType };

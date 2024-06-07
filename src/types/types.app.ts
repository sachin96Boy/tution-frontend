type User = {
  first_name: string;
  last_name: string;
  id: string;
  email: string;
  phone: string;
  type?: string;
  resetToken?: string;
  validated?: boolean;
  school?: string;
  subject_stream?: string;
  exam_year?: string;
  district?: string;
  address?: string;
  nic?: string;
  parent_mobile?: string;
  attandance?: UAttendence[];
  Subject?: USubject[];
  UserOnMonth?: UserOnMonth[];
};
type UAttendence = {
  id: string;
  lecture_id: number;
  user_id: string;
  time: string;
  lecture: Lecture;
  paid: boolean;
};
type UserOnMonth = {
  user_id: string;
  month_id: number;
  date: string;
  paid: number;
};
type USubject = {
  user_id: string;
  subject_id: string;
  enrollment_date: string;
  enrollment_type: string;
  enroll_id: string;
  invoice_id: string;
  invoice_date: string;
  enrolled_by: string;
  Subject: Subject;
};

type Lecture = {
  id: number;
  title: string;
  description: string;
  month: Month;
  date: string | Date;
  month_id: number;
};

type Month = {
  id: number;
  month_name: string;
  year: number;
  subject_id: string;
  subject: Subject;
};

type Subject = {
  id: string;
  subject_id: string;
  subject_name: string;
  grade: number;
  year: number;
  teacher_id: string;
  teacher: Teacher;
  monthly_fee: number;
  enrollment_fee: number;
  start_date: string;
  end_date: string;
};
type Teacher = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
};
export type {
  User,
  UAttendence,
  UserOnMonth,
  USubject,
  Lecture,
  Month,
  Subject,
  Teacher,
};

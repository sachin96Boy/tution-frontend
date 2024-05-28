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
  Attandance?: [];
  Subject?: [];
};

export type { User };

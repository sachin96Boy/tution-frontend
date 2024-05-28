type Props = {
  subject: {
    id: string;
    subject_id: string;
    subject_name: string;
    grade: string;
    year: string;
  };
  link: string;
  enrolled?: boolean;
};

export type { Props };

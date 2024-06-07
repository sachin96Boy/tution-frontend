type Props = {
  subject: {
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
  link: string;
  enrolled?: boolean;
  refresh?: boolean;
  setRefresh?: (refresh: boolean) => void;
  enrollment_type?: string;
};

export type { Props };

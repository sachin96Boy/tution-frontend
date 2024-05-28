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
  refresh?: boolean;
  setRefresh?: (refresh: boolean) => void;
};

export type { Props };

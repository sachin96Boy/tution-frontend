type TextInputProps = {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  value: string | number;
  classNameD?: string;
  classNameL?: string;
  classNameI?: string;
  error?: string;
  touched?: boolean;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { TextInputProps };

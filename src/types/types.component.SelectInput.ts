type SelectInputProps = {
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
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
};

export type { SelectInputProps };

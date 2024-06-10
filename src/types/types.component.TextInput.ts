/* eslint-disable @typescript-eslint/no-explicit-any */

type TextInputProps = {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  value: any;
  classNameD?: string;
  classNameL?: string;
  classNameI?: string;
  error?: any;
  touched?: any;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { TextInputProps };

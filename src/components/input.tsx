import { useField } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputTypProps = {
  label: string;
  name: string;
  type: React.HTMLInputTypeAttribute | undefined;
  className: string | undefined;
  placeholder: string | undefined;
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
  isPassword?: boolean;
  onToggle?: () => void;
};

const Input = (props: InputTypProps) => {
  const {
    label,
    name,
    className,
    placeholder,
    handleChange,
    onBlur,
    value,
    type,
    onToggle,
    isPassword = false,
  } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className={`flex items-center justify-between ${className}`}>
        <input
          className="w-full"
          id={field.name}
          {...field}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={onBlur}
          value={value}
          type={!isPassword ? type : "text"}
        />
        {type == "password" ? (
          <div className="items-end cursor-pointer" onClick={onToggle}>
            {isPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <div className="error text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};
export default Input;

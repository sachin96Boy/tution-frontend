interface TextInputProps {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  classNameD?: string;
  classNameL?: string;
  classNameI?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
  classNameD,
  classNameL,
  classNameI,
}: TextInputProps) => {
  return (
    <div
      className={
        "flex flex-col justify-start items-start w-[100%] max-w-[396px] " +
        classNameD
      }
    >
      <label
        htmlFor={name}
        className={
          "font-[500] font-montserrat text-[15px] text-[#647BA9] w-fit text-center " +
          classNameL
        }
      >
        {label}
      </label>
      <input
        type={type || "text"}
        name={name}
        id={name}
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange}
        className={
          "font-[500] font-montserrat text-[16px] p-2 w-[100%]  max-w-[396px] h-[50px] text-[#647BA9] rounded-[5px] border-[1px] border-[#DCE3F0] focus:border-[#a7a7a7] focus:outline-none " +
          classNameI
        }
      />
    </div>
  );
};
export default TextInput;

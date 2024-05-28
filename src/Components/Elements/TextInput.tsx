import { TextInputProps } from "../../types/types.component.TextInput";

const TextInput = (props: TextInputProps) => {
  return (
    <div
      className={
        "flex flex-col justify-start items-start w-[100%] max-w-[396px] " +
        props.classNameD
      }
    >
      <label
        htmlFor={props.name}
        className={
          "font-[500] font-montserrat text-[15px] text-prime w-fit text-center " +
          props.classNameL
        }
      >
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder || ""}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={
          "font-[500] font-montserrat text-[16px] p-2 w-[100%]  max-w-[396px] h-[50px] text-prime rounded-[5px] border-[1px] border-[#DCE3F0] focus:border-[#a7a7a7] focus:outline-none " +
          props.classNameI
        }
      />
      <p className="text-tertiary-alt text-[12px]">
        {props.touched && props.error ? props.error : ""}
      </p>
    </div>
  );
};
export default TextInput;

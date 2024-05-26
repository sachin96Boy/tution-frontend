/* eslint-disable @typescript-eslint/no-explicit-any */

const SelectInput = (props: any) => {
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

      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={
          "w-[100%] max-w-[396px] h-[50px] border border-solid  rounded-[5px] text-center font-[500] font-montserrat text-[15px] text-prime bg-second-alt focus:outline-none " +
          props.classNameI
        }
      >
        {props.children}
      </select>
      <p className="text-tertiary-alt text-[12px]">
        {props.touched && props.error ? props.error : ""}
      </p>
    </div>
  );
};
export default SelectInput;

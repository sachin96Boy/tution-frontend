import { useField } from "formik";

type InputTypProps = {
    label:string,
    name:string,
    type:string,
    className:string | undefined, 
    placeholder:string | undefined,
    onChange:React.ChangeEventHandler<HTMLInputElement> | undefined,
    value:string | number | readonly string[] | undefined,
}

const Input = (props: InputTypProps) => {
    const {label, name, className, placeholder, onChange, value} = props;
   const [field, meta, ] = useField(props) ;
    return (
        <>
        <label
         htmlFor={name}
         className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <input
          id={field.name} 
          autoComplete="given_name" 
          {...field}
          {...props}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
      />
      {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
    </>
    
    );
};
export default Input;














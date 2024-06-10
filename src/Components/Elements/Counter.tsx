import { Link } from "react-router-dom";
import { Props } from "../../types/types.component.counter";

const Counter = (props: Props) => {
  return (
    <Link to={props.link} className="flex flex-row justify-start items-center">
      <img src={props.icon} alt="" className="shadow-sm rounded-[10px]" />
      {props.count > 0 ? (
        <div className=" rounded-full bg-[#FF001F] text-[12px] text-second-alt font-montserrat font-[600] w-5 h-5 flex justify-center items-center relative right-4 bottom-5 max-md:w-2 max-md:h-2 max-md:text-[6px]">
          {props.count}
        </div>
      ) : null}
    </Link>
  );
};
export default Counter;

import { Link } from "react-router-dom";

const Counter = ({
  icon,
  count,
  link,
}: {
  icon: string;
  count: number;
  link: string;
}) => {
  return (
    <Link to={link} className="flex flex-row justify-start items-center">
      <img src={icon} alt="" className="shadow-sm rounded-[10px]" />
      {count > 0 ? (
        <div className=" rounded-full bg-[#FF001F] text-[12px] text-white font-montserrat font-[600] w-5 h-5 flex justify-center items-center relative right-4 bottom-5 max-md:w-2 max-md:h-2 max-md:text-[6px]">
          {count}
        </div>
      ) : null}
    </Link>
  );
};
export default Counter;

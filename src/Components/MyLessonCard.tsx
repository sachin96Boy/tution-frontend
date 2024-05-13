import { Link } from "react-router-dom";

const MyLessonCard = () => {
  return (
    <Link to={"/mylessons/1"}>
      <div className="w-[375px] h-[112px] bg-second-alt rounded-[10px] shadow-md flex flex-row justify-start items-center p-2 max-md:flex-wrap max-md:h-fit">
        <div className="min-w-[95px] h-[95px] bg-tertiary rounded-[10px] flex justify-center items-center text-second-alt text-[16px] font-[500] mr-2">
          January
        </div>
        <div className="pl-4 max-md:pl-0 flex flex-col justify-start items-start gap-y-2 w-full max-md:w-fit">
          <p className="text-prime text-[14px] font-[600]">
            2022 Biology Revision{" "}
          </p>
          <p className="text-prime-alt text-[12px] font-[400]">
            By Lucia Greer
          </p>
          <div className="flex flex-row justify-between h-[10px] items-center w-[90%] rounded-full bg-prime-alt"></div>
        </div>
      </div>
    </Link>
  );
};
export default MyLessonCard;

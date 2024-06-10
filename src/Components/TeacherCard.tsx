import { Link } from "react-router-dom";
import { Props } from "../types/types.component.TeacherCard";

const TeacherCard = (props: Props) => {
  return (
    <Link to={props.link + props.teacher.id}>
      <div className="w-[182px] h-[230px] shadow-md hover:scale-105 transition-all duration-200 bg-second-alt rounded-lg flex flex-col justify-start items-center p-2">
        <img
          src={
            "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB"
          }
          className="w-[166px] h-[164px] object-cover rounded-lg"
          alt=""
        />
        <div className="flex flex-col justify-start items-start w-full pt-2">
          <p className=" font-montserrat text-[14px] font-[500]">
            {props.teacher.first_name}
          </p>
          <p className=" font-montserrat text-[12px] font-[400]">
            {props.teacher.last_name}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default TeacherCard;

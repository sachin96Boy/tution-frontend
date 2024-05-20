import { Link } from "react-router-dom";

const TeacherCard = ({
  teacher,
}: {
  teacher: { id: string; name: string; subject: string; image: string };
}) => {
  return (
    <Link to={"/student/teacher/" + teacher.id}>
      <div className="w-[182px] h-[230px] shadow-md hover:scale-105 transition-all duration-200 bg-second-alt rounded-lg flex flex-col justify-start items-center p-2">
        <img
          src={teacher.image}
          className="w-[166px] h-[164px] object-cover rounded-lg"
          alt=""
        />
        <div className="flex flex-col justify-start items-start w-full pt-2">
          <p className=" font-montserrat text-[14px] font-[500]">
            {teacher.name}
          </p>
          <p className=" font-montserrat text-[12px] font-[400]">
            {teacher.subject}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default TeacherCard;

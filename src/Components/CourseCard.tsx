import { Link } from "react-router-dom";

const CourseCard = ({
  course,
}: {
  course: {
    id: string;
    courseName: string;
    subjectName: string;
    courseDescription: string;
  };
}) => {
  return (
    <Link to={"/student/course/" + course.id}>
      <div className="w-[182px] h-[230px] shadow-md hover:scale-105 transition-all duration-200 bg-second-alt rounded-lg flex flex-col justify-start items-center p-2">
        <div className="w-[166px] h-[164px] object-cover rounded-lg bg-prime font-montserrat text-[20px] font-[700] text-second-alt flex flex-col justify-center items-center text-center px-4">
          {course.courseName}
        </div>
        <div className="flex flex-col justify-start items-start w-full pt-2 text-prime">
          <p className=" font-montserrat text-[14px] font-[600]">
            {course.courseDescription}
          </p>
          <p className=" font-montserrat text-[12px] font-[400]">
            {course.subjectName}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default CourseCard;

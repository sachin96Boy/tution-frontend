import { useParams } from "react-router";
import LessonsCard from "../../Components/LessonsCard";

const Course = () => {
  const { id } = useParams();
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-[#3B5079]">
        {"Course id =" + id}{" "}
        <span className="text-[20px] font-[500] text-[#3B5079]">
          {"Subjectname"}
        </span>
      </h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
      </div>
    </div>
  );
};
export default Course;

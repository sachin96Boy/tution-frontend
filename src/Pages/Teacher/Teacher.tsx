/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router";
import CourseCard from "../../Components/CourseCard";

const Teacher = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState({});
  const [courses, setCourses] = useState([]);
  const course = {
    id: "1",
    courseName: "Biology 2022",
    courseDescription: "2022 Biology Revision",
    subjectName: "Biology",
  };
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-[#3B5079]">
        {"Teacher id =" + id}
      </h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        <CourseCard course={course} />
        <CourseCard course={course} />
        <CourseCard course={course} />
        <CourseCard course={course} />
        <CourseCard course={course} />
        <CourseCard course={course} />
      </div>
    </div>
  );
};
export default Teacher;

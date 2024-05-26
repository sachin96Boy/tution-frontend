/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseCard from "../../Components/CourseCard";
import { baseURL } from "../../const/const";
import axios from "axios";

const Teacher = () => {
  const { id } = useParams();
  type Subject = {
    id: string;
    subject_id: string;
    subject_name: string;
    grade: string;
    year: string;
  };
  type Teacher = {
    id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  };
  const [teacher, setTeacher] = useState<Teacher>();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [enrolledList, setEnrolledList] = useState<Subject[]>([]);
  axios.defaults.withCredentials = true;
  const getSubjects = async () => {
    const result = await axios.get(baseURL + "/subjects/get/byteacher/" + id);
    if (result.status === 200) {
      setSubjects(result.data);
    }
  };
  const getTeacher = async () => {
    const result = await axios.get(baseURL + "/teachers/get/" + id);
    if (result.status === 200) {
      setTeacher(result.data);
    }
  };
  const getEnrolledList = async () => {
    const result = await axios.get(baseURL + "/subjects/get/enrolled/");
    if (result.status === 200) {
      setEnrolledList(result.data);
    }
  };

  useEffect(() => {
    getSubjects();
    getTeacher();
    getEnrolledList();
  }, []);

  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">
        {teacher?.first_name} {teacher?.last_name}
      </h1>
      <h2 className="text-[20px] font-[500] text-prime-alt">
        {teacher?.email}
      </h2>
      <h2 className="text-[20px] font-[500] text-prime-alt">
        {teacher?.phone}
      </h2>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        {subjects.map((subject, index) => {
          return (
            <CourseCard
              link={"/student/course/"}
              subject={subject}
              key={index}
              enrolled={
                enrolledList.find((ensubject) => ensubject.id === subject.id)
                  ? true
                  : false
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export default Teacher;

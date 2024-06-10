/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseCard from "../../../../Components/CourseCard";
import { Subject, TeacherType } from "../../../../types/types.Teacher";
import axiosInstance from "../../../../utils/axiosInstance";

const Teacher = () => {
  const { id } = useParams();

  const [teacher, setTeacher] = useState<TeacherType>();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [enrolledList, setEnrolledList] = useState<Subject[]>([]);
  const [refresh, setRefresh] = useState(false);

  const getSubjects = useCallback(async () => {
    const result = await axiosInstance.get("/subjects/get/byteacher/" + id);
    if (result.status === 200) {
      setSubjects(result.data);
    }
  }, []);
  const getTeacher = useCallback(async () => {
    const result = await axiosInstance.get("/teachers/get/" + id);
    if (result.status === 200) {
      setTeacher(result.data);
    }
  }, []);
  const getEnrolledList = useCallback(async () => {
    const result = await axiosInstance.get("/subjects/get/enrolled/");
    if (result.status === 200) {
      setEnrolledList(result.data.Subject);
    }
  }, []);

  useEffect(() => {
    getSubjects();
    getTeacher();
    getEnrolledList();
  }, [refresh, getSubjects, getTeacher, getEnrolledList]);

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
              link={"/student/subject/"}
              subject={subject}
              key={index}
              refresh={refresh}
              setRefresh={setRefresh}
              enrolled={
                enrolledList.find(
                  (ensubject) => ensubject.subject_id === subject.id
                )
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

import TeacherCard from "../../Components/TeacherCard";
import { useEffect, useState } from "react";
import { Teacher } from "../../types/types.Teachers";
import axiosInstance from "../../utils/axiosInstance";
const Teachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const getTeachers = async () => {
    const result = await axiosInstance.get("/teachers/get");
    if (result.status === 200) {
      setTeachers(result.data);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">Teachers</h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        {teachers.map((teacher) => (
          <TeacherCard link="/student/teacher/" teacher={teacher} />
        ))}
      </div>
    </div>
  );
};
export default Teachers;

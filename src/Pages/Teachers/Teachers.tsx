import axios from "axios";
import TeacherCard from "../../Components/TeacherCard";
import { useEffect, useState } from "react";
import { baseURL } from "../../const/const";

const Teachers = () => {
  type Teacher = {
    id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  };
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  axios.defaults.withCredentials = true;
  const getTeachers = async () => {
    const result = await axios.get(baseURL + "/teachers/get");
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

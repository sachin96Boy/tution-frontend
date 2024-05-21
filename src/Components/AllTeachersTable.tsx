/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AdminTeacherCard from "./AdminTeacherCard";
import axios from "axios";
import { baseURL } from "../const/const";

const AllTeachersTable = () => {
  const [teachers, setTeachers] = useState([]);
  const getTeachers = async () => {
    const result = await axios.get(baseURL + "/teachers/get");
    if (result.status === 200) {
      console.log(result.data);
      setTeachers(result.data);
    }
  };
  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <div className="flex flex-crow flex-wrap justify-start gap-8 items-center h-full w-full">
      {teachers.map((teacher) => (
        <AdminTeacherCard teacher={teacher} />
      ))}
    </div>
  );
};
export default AllTeachersTable;

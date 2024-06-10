/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AdminTeacherCard from "./AdminTeacherCard";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer } from "react-toastify";
import toaster from "./Elements/Toaster";
import { Teacher } from "../types/type.component.allTeacherTable";

const AllTeachersTable = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const getTeachers = async () => {
    try {
      const result = await axiosInstance.get("/teachers/get");
      if (result.status === 200) {
        setTeachers(result.data);
      } else {
        toaster("error", "Error while fetching teachers");
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  };
  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <div>
      <ToastContainer />
      <div className="flex flex-crow flex-wrap justify-start gap-8 items-center h-full w-full">
        {teachers.map((teacher, index) => (
          <AdminTeacherCard teacher={teacher} key={index} />
        ))}
      </div>
    </div>
  );
};
export default AllTeachersTable;

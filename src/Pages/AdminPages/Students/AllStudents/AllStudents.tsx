/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import axiosInstance from "../../../../utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import toaster from "../../../../Components/Elements/Toaster";
import AdminStudentCard from "../../../../Components/AdminStudentCard";
type Student = {
  first_name: string;
  last_name: string;
  id: string;
  email: string;
  phone: string;
  type?: string;
  resetToken?: string;
  validated?: boolean;
  school?: string;
  subject_stream?: string;
  exam_year?: string;
  district?: string;
  address?: string;
  nic?: string;
  parent_mobile?: string;
  Attandance?: [];
  Subject?: [];
};

const AllStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const getStudents = useCallback(async () => {
    try {
      const result = await axiosInstance.get("/users/get");
      if (result.status === 200) {
        setStudents(result.data);
      } else {
        toaster("error", "Something went wrong");
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  }, []);

  useEffect(() => {
    getStudents();
  }, [getStudents]);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">All Students</h1>
      <div className="flex flex-col  justify-start gap-8 items-start h-full w-full mt-12">
        <Link
          className=" mt-4 rounded-[5px] bg-tertiary text-second-alt font-montserrat text-[16px] flex items-center justify-center  font-[700] w-fit h-[50px] px-4 shadow-md hover:shadow-none hover:scale-95 transition-all duration-200  max-md:mx-4"
          to="/admin/Students/create"
        >
          Add New Student
        </Link>
        <div className="flex flex-crow flex-wrap justify-start gap-8 items-center h-full w-full">
          {students.map((student, index) => {
            return <AdminStudentCard student={student} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AllStudents;

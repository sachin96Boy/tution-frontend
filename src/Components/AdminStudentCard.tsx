/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import toaster from "./Elements/Toaster";

type Student = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};
const AdminStudentCard = ({ student }: { student: Student }) => {
  const deleteStudent = async () => {
    try {
      const response = await axiosInstance.delete(
        "/users/delete/" + student.id
      );
      if (response.status === 200) {
        toaster("success", "Student deleted successfully");
        window.location.reload();
      } else {
        toaster("error", "Something went wrong");
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="min-w-[520px] max-md:w-full max-md:min-w-full rounded-[10px] bg-second-alt p-4 flex flex-row max-md:flex-col gap-4 justify-start items-start shadow-md max-md:mx-4">
        <div className="h-[142px] min-w-[142px] max-md:w-full bg-prime-alt rounded-lg"></div>
        <div className="w-full">
          <div className="flex flex-row justify-start items-center gap-2 w-full text-[14px] max-md:text-[12px]">
            <div className="min-w-fit">
              <p className="text-prime  font-[400]">First name</p>
              <p className="text-prime  font-[400]">Last name</p>
              <p className="text-prime  font-[400]">Phone Number</p>
              <p className="text-prime  font-[400]">Email</p>
            </div>
            <div className="w-full">
              <p className="text-prime  font-[600]">{student.first_name}</p>
              <p className="text-prime  font-[600]">{student.last_name}</p>
              <p className="text-prime  font-[600]">{student.phone}</p>
              <p className="text-prime  font-[600]">{student.email}</p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start gap-4 w-full mt-2">
            <Link
              to={"/admin/students/enroll/" + student.id}
              className=" rounded-[5px] bg-tertiary text-second-alt font-montserrat text-[16px] flex items-center justify-center  font-[700] w-full h-[50px] px-4 shadow-md hover:shadow-none hover:scale-95 transition-all duration-200"
            >
              ENROLL
            </Link>
            <button
              className=" rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[16px] flex items-center justify-center  font-[700] w-full h-[50px] px-4 shadow-md hover:shadow-none hover:scale-95 transition-all duration-200"
              onClick={deleteStudent}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminStudentCard;

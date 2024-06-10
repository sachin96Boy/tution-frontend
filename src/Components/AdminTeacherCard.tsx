/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../utils/axiosInstance";
import toaster from "./Elements/Toaster";
import { Teacher } from "../types/type.component.adminTeacherCard";

const AdminTeacherCard = ({ teacher }: { teacher: Teacher }) => {
  const deleteTeacher = async () => {
    try {
      const result = await axiosInstance.delete("/teachers/delete", {
        data: {
          id: teacher.id,
        },
      });
      if (result.status === 200) {
        toaster("success", "Teacher deleted successfully");
      } else {
        toaster("error", "Something went wrong");
      }
      window.location.reload();
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
              <p className="text-prime  font-[600]">{teacher.first_name}</p>
              <p className="text-prime  font-[600]">{teacher.last_name}</p>
              <p className="text-prime  font-[600]">{teacher.phone}</p>
              <p className="text-prime  font-[600]">{teacher.email}</p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start gap-4 w-full mt-2">
            <Link
              to={"/admin/teachers/edit/" + teacher.id}
              className=" rounded-[5px] bg-tertiary text-second-alt font-montserrat text-[16px] flex items-center justify-center  font-[700] w-full h-[50px] px-4 shadow-md hover:shadow-none hover:scale-95 transition-all duration-200"
            >
              EDIT
            </Link>
            <button
              className=" rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[16px] flex items-center justify-center  font-[700] w-full h-[50px] px-4 shadow-md hover:shadow-none hover:scale-95 transition-all duration-200"
              onClick={deleteTeacher}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminTeacherCard;

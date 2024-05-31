/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import toaster from "./Elements/Toaster";
import { Props } from "../types/type.component.adminSubjectCard";

const AdminSubjectCard = (props: Props) => {
  axios.defaults.withCredentials = true;
  const deleteSubject = async () => {
    try {
      const result = await axiosInstance.delete("/subjects/delete", {
        data: { id: props.subject.id },
      });

      if (result.status === 200) {
        toaster("success", "Subject deleted successfully");
        window.location.reload();
      } else {
        toaster("error", "Something went wrong");
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <ToastContainer />

      <div className="shadow-md hover:scale-105 transition-all duration-200 bg-second-alt rounded-lg flex flex-row">
        <Link to={props.link + props.subject.id}>
          <div className="w-[182px] h-[230px]  flex flex-col justify-start items-center p-2">
            <div className="w-[166px] min-h-[172px] object-cover rounded-lg bg-prime font-montserrat text-[20px] font-[700] text-second-alt flex flex-col justify-center items-center text-center px-4">
              {props.subject.subject_name} {props.subject.grade}
            </div>
            <div className="flex flex-col justify-start items-start w-full pt-2 text-prime">
              <p className=" font-montserrat text-[14px] font-[600]">
                {props.subject.year}
              </p>
              <p className=" font-montserrat text-[12px] font-[400]">
                {props.subject.subject_id}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col  p-2 gap-2">
          <button
            onClick={() =>
              navigate("/admin/subjects/attendence/" + props.subject.id)
            }
            className="w-fit px-3 h-[52px] bg-prime-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Attendence
          </button>
          <button
            onClick={() => navigate("/admin/subjects/edit/" + props.subject.id)}
            className="w-full h-[52px] bg-tertiary text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Edit
          </button>
          <button
            onClick={deleteSubject}
            className="w-full h-[52px] bg-tertiary-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminSubjectCard;

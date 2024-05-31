/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import toaster from "./Elements/Toaster";
import { Props } from "../types/type.component.courseCard";

const CourseCard = (props: Props) => {
  const enroll = async () => {
    try {
      const result = await axiosInstance.post("/subjects/enroll", {
        id: props.subject.id,
      });
      if (result.status === 200) {
        props.setRefresh && props.setRefresh(!props.refresh);
        toaster("success", "Enrolled successfully");
      } else {
        toaster("error", "Something went wrong");
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  };

  const unenroll = async () => {
    try {
      const result = await axiosInstance.post("/subjects/unenroll", {
        id: props.subject.id,
      });
      if (result.status === 200) {
        props.setRefresh && props.setRefresh(!props.refresh);
        toaster("success", "Unenrolled successfully");
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
      <Link to={props.link + props.subject.id}>
        <div className="w-[182px] h-[230px] shadow-md hover:scale-105 transition-all duration-200 bg-second-alt rounded-lg flex flex-col justify-start items-center p-2">
          <div className="w-[166px] h-[164px] object-cover rounded-lg bg-prime font-montserrat text-[20px] font-[700] text-second-alt flex flex-col justify-center items-center text-center px-4">
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
      {props.enrolled ? (
        <div>
          <button
            onClick={() => {
              confirm("Are you sure you want to unenroll?") && unenroll();
              // window.location.reload();
            }}
            className="w-full h-[52px] bg-tertiary-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200 mt-4"
          >
            Unenroll
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              enroll();
              // window.location.reload();
            }}
            className="w-full h-[52px] bg-tertiary text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200 mt-4"
          >
            Enroll for {props.subject.price}.00/=
          </button>
        </div>
      )}
    </div>
  );
};
export default CourseCard;

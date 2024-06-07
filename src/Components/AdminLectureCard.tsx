/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import toaster from "./Elements/Toaster";
import { useCallback } from "react";
import { ToastContainer } from "react-toastify";
type Props = {
  link: string;
  lecture: {
    id: number;
    title: string;
    description: string;
    month: any;
    subject: any;
    date: string;
  };
};

const AdminLectureCard = (props: Props) => {
  const navigate = useNavigate();
  const deleteLecture = useCallback(async () => {
    try {
      const result = await axiosInstance.delete("/lecture/" + props.lecture.id);

      if (result.status === 200) {
        toaster("success", "Lecture deleted successfully");
        window.location.reload();
      } else {
        toaster("error", "Something went wrong");
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  }, [props.lecture.id]);
  return (
    <div>
      <ToastContainer />
      <div className="shadow-md hover:scale-105 transition-all duration-200 bg-second-alt rounded-lg flex flex-row">
        <Link to={props.link + props.lecture.id}>
          <div className="w-[182px] h-fit flex flex-col justify-start items-center p-2">
            <div className="w-[166px] min-h-[172px] object-cover rounded-lg bg-prime font-montserrat text-[20px] font-[700] text-second-alt flex flex-col justify-center items-center text-center px-4">
              {new Date(props.lecture.date).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </Link>
        <div className="flex flex-col  p-2 gap-2">
          <button
            onClick={() => {
              const today = new Date().toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });
              const lecture_day = new Date(props.lecture.date).toLocaleString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              );

              if (today === lecture_day) {
                navigate("/admin/attendence/" + props.lecture.id);
              } else {
                toaster(
                  "error",
                  "You can only mark attendance for  this day unless it is today's lecture"
                );
              }
            }}
            className="w-fit px-3 h-[52px] bg-prime-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Attendence
          </button>
          <button
            onClick={() => {
              navigate(
                "/admin/months/" +
                  props.lecture.month.id +
                  "/lectures/" +
                  props.lecture.id +
                  "/edit"
              );
            }}
            className="w-full h-[52px] bg-tertiary text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Edit
          </button>
          <button
            onClick={deleteLecture}
            className="w-full h-[52px] bg-tertiary-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminLectureCard;

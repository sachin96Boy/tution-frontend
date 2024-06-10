/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import axiosInstance from "../../../../../../../../../utils/axiosInstance";
import toaster from "../../../../../../../../../Components/Elements/Toaster";
import {
  UAttendence,
  Lecture,
  User,
  UserOnMonth,
  USubject,
} from "../../../../../../../../../types/types.app";
const Attendence = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>({} as User);
  const [lecture, setLecture] = useState<Lecture>({} as Lecture);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [paid, setPaid] = useState<boolean>(false);

  const markAttendance = async () => {
    const values = {
      user_id: user.id,
      lecture_id: lecture.id,
      paid: paid,
    };
    try {
      const result = await axiosInstance.post("/attendance/add", values);
      if (result.status === 200) {
        toaster("success", result.data.message);
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  };

  useEffect(() => {
    const getLecture = async () => {
      const result = await axiosInstance.get("/lecture/" + id);
      if (result.status === 200) {
        setLecture(result.data);
      }
    };
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 10,
      },
      false
    );
    async function getUser(id: string) {
      try {
        const result = await axiosInstance.get("/users/get/" + id);
        if (result.status === 200) {
          setUser(result.data);
        } else {
          toaster("error", result.data.message);
        }
      } catch (error: any) {
        toaster("error", error.response.data.message);
      }
    }
    function success(result: any) {
      scanner.clear();
      getUser(result);
      scanner.pause();
    }

    function error(err: any) {
      err;
    }

    getLecture();
    scanner.render(success, error);
  }, [refresh]);

  useEffect(() => {
    setPaid(
      Boolean(
        user?.UserOnMonth?.find(
          (month: UserOnMonth) => month.month_id === lecture.month_id
        )
      )
    );
  }, [user]);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <ToastContainer />
      <h1 className="text-[30px] font-[700] text-prime">Marking Attendence</h1>
      {/* <pre>{JSON.stringify(paidCatcher, null, 2)}</pre> */}
      <div className="flex flex-row flex-wrap justify-center gap-2 items-start h-full w-full mt-12">
        <div className="flex flex-col justify-start items-start w-fit gap-2">
          <div className=" shadow-md  bg-second-alt rounded-lg flex flex-row justify-start items-start ">
            <div className="w-fit h-fit flex flex-col justify-start items-center p-2">
              <div className="w-fit h-fit object-cover rounded-lg bg-prime font-montserrat text-[20px] font-[700] text-second-alt flex flex-col justify-start items-start text-center p-2">
                {lecture?.month?.subject.subject_name}{" "}
                {lecture?.month?.subject.grade}
                <p className=" font-montserrat text-[14px] font-[600]">
                  {lecture?.month?.subject.year}
                </p>
                <p className=" font-montserrat text-[12px] font-[400]">
                  {lecture?.month?.subject.subject_id}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start w-full pt-2 text-prime">
                {lecture?.month?.month_name} - {lecture?.month?.year}
              </div>
            </div>
            <div className="pr-2 pt-4">
              <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
                {lecture?.month?.subject?.teacher?.first_name}{" "}
                {lecture?.month?.subject?.teacher?.last_name}
              </p>
              <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
                {lecture?.month?.subject?.teacher?.email}
              </p>
              <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
                {lecture?.month?.subject?.teacher?.phone}
              </p>
            </div>
          </div>
          <div className="shadow-md  w-full p-2  bg-second-alt rounded-lg flex flex-col justify-start items-start ">
            <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
              Lecture Details
            </p>
            <p className="text-prime text-[14px] font-[300]">
              <span className="text-prime text-[14px] font-[600]">Date: </span>
              {new Date(lecture.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-prime text-[14px] font-[300]">
              <span className="text-prime text-[14px] font-[600]">Title: </span>
              {lecture?.title}
            </p>
            <p className="text-prime text-[14px] font-[300]">
              <span className="text-prime text-[14px] font-[600]">
                Description:
              </span>{" "}
              {lecture?.description}
            </p>
          </div>
          <div className="shadow-md w-full p-2  bg-second-alt rounded-lg flex flex-col justify-start items-start ">
            <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
              Student's Details
            </p>
            <p className="text-prime text-[14px] font-[300]">
              <span className="text-prime text-[14px] font-[600]">Name: </span>
              {user?.first_name} {user?.last_name}
            </p>

            <p className="text-prime text-[14px] font-[300]">
              <span className="text-prime text-[14px] font-[600]">Email: </span>
              {user?.email}
            </p>

            <p className="text-prime text-[14px] font-[300]">
              <span className="text-prime text-[14px] font-[600]">Phone: </span>
              {user?.phone}
            </p>
          </div>
          <div className="shadow-md w-full p-2  bg-second-alt rounded-lg flex flex-col justify-start items-start ">
            <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
              Enrollment Status
            </p>
            {user?.Subject?.find(
              (subject: USubject) =>
                subject.subject_id === lecture?.month?.subject?.id
            ) ? (
              <p className="text-[#4bff4b] text-[14px] font-[600]">Enrolled</p>
            ) : (
              <p className="text-tertiary-alt text-[14px] font-[600]">
                Not Enrolled
              </p>
            )}
            {
              <p className="text-prime text-[14px] font-[300]">
                <span className="text-prime text-[14px] font-[600]">
                  Enrollment Type:{" "}
                </span>
                {
                  user?.Subject?.find(
                    (subject: USubject) =>
                      subject.subject_id === lecture?.month?.subject?.id
                  )?.enrollment_type
                }
              </p>
            }
            <p className="text-prime text-[14px] font-[300]">
              <span className="text-prime text-[14px] font-[600]">
                Paid For this Month:{" "}
              </span>
              {paid ? "Yes" : "No"}
            </p>
          </div>
          <div className="shadow-md w-full p-2  bg-second-alt rounded-lg flex flex-col justify-start items-start ">
            <p className="text-prime text-[14px] font-[600]">
              Past Attendence of This Month
            </p>
            {user?.attandance
              ?.filter(
                (att: UAttendence) =>
                  att.lecture?.month_id === lecture?.month_id
              )
              .map((att: UAttendence) => (
                <p className="text-prime text-[14px] font-[300]">
                  {att.lecture?.title} -{" "}
                  {new Date(att.lecture?.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {att.paid ? (
                    <span className="text-[#4bff4b] font-[600]">Paid</span>
                  ) : (
                    <span className="text-tertiary-alt font-[600]">
                      Not Paid
                    </span>
                  )}
                </p>
              ))}
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-fit h-full gap-2">
          <button
            onClick={markAttendance}
            className="w-full h-[52px] bg-tertiary text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Mark Attendence
          </button>
          <button
            onClick={() => {
              setRefresh(!refresh);
              setUser({} as User);
            }}
            className="w-full h-[52px] bg-tertiary-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Restart Process
          </button>
          <div
            id="reader"
            className="w-[350px] h-full  shadow-md  bg-second-alt rounded-lg border-none"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Attendence;

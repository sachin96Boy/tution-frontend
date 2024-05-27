/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../../const/const";
import { Bounce, toast, ToastContainer } from "react-toastify";
const Attendence = () => {
  axios.defaults.withCredentials = true;
  const { id } = useParams();
  const [user, setUser] = useState<any>();
  const [subject, setSubject] = useState<Subject>();
  const [refresh, setRefresh] = useState(false);

  type Subject = {
    id: string;
    subject_id: string;
    subject_name: string;
    grade: string;
    year: string;
    teacher: any;
  };
  const markAttendance = async () => {
    const values = {
      student_id: user?.id,
      subject_id: subject?.id,
      time: new Date(),
    };
    try {
      const result = await axios.post(baseURL + "/attendance/add", values);
      if (result.status === 200) {
        toast.success("Attendence Marked Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        console.log("Error Error");
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    const getSubject = async () => {
      const result = await axios.get(baseURL + "/subjects/get/" + id);
      if (result.status === 200) {
        setSubject(result.data);
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
        const result = await axios.get(baseURL + "/users/get/" + id);
        if (result.status === 200) {
          setUser(result.data);
        }
      } catch (error: any) {
        console.log(error);
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

    getSubject();
    scanner.render(success, error);
  }, [refresh]);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <ToastContainer />
      <h1 className="text-[30px] font-[700] text-prime">Marking Attendence</h1>
      <div className="flex flex-row flex-wrap justify-start gap-2 items-start h-full w-full mt-12">
        <div className="flex flex-col justify-start items-start w-fit gap-2">
          <div className=" shadow-md  bg-second-alt rounded-lg flex flex-row justify-start items-start ">
            <div className="w-fit h-fit flex flex-col justify-start items-center p-2">
              <div className="w-fit h-fit object-cover rounded-lg bg-prime font-montserrat text-[20px] font-[700] text-second-alt flex flex-col justify-start items-start text-center p-2">
                {subject?.subject_name} {subject?.grade}
                <p className=" font-montserrat text-[14px] font-[600]">
                  {subject?.year}
                </p>
                <p className=" font-montserrat text-[12px] font-[400]">
                  {subject?.subject_id}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start w-full pt-2 text-prime"></div>
            </div>
            <div className="pr-2 pt-4">
              <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
                {subject?.teacher.first_name} {subject?.teacher.last_name}
              </p>
              <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
                {subject?.teacher.email}
              </p>
              <p className="text-prime text-[16px] font-[700]  w-fit text-nowrap">
                {subject?.teacher.phone}
              </p>
            </div>
          </div>
          <div className="shadow-md  w-full p-2  bg-second-alt rounded-lg flex flex-col justify-start items-start ">
            <p className="text-prime text-[14px] font-[600]">
              Date: {new Date().toLocaleDateString()}
            </p>
            <p className="text-prime text-[14px] font-[600]">
              Time: {new Date().toLocaleTimeString()}
            </p>
          </div>
          <div className="shadow-md w-full p-2  bg-second-alt rounded-lg flex flex-col justify-start items-start ">
            <p className="text-prime text-[14px] font-[600]">
              Name :{user?.first_name} {user?.last_name}
            </p>

            <p className="text-prime text-[14px] font-[600]">
              Email :{user?.email}
            </p>

            <p className="text-prime text-[14px] font-[600]">
              Phone :{user?.phone}
            </p>
            <p className="text-prime text-[14px] font-[600]">
              School : {user?.school}
            </p>
            <p className="text-prime text-[14px] font-[600]">
              Subject Stream : {user?.subject_stream}
            </p>
            <p className="text-prime text-[14px] font-[600]">
              District : {user?.district}
            </p>
            <p className="text-prime text-[14px] font-[600]">
              Address : {user?.address}
            </p>
            <p className="text-prime text-[14px] font-[600]">
              NIC : {user?.nic}
            </p>
            <p className="text-prime text-[14px] font-[600]">
              Parent's Mobile : {user?.parent_mobile}
            </p>
          </div>
          <div className="shadow-md w-full p-2  bg-second-alt rounded-lg flex flex-col justify-start items-start ">
            {user?.Subject?.find(
              (ensubject: any) => ensubject.id === subject?.id
            ) ? (
              <p className="text-prime text-[14px] font-[600]">Enrolled</p>
            ) : (
              <p className="text-tertiary-alt text-[14px] font-[600]">
                Not Enrolled
              </p>
            )}
          </div>
          <div className="shadow-md w-full p-2  bg-second-alt rounded-lg flex flex-col justify-start items-start ">
            <p className="text-prime text-[14px] font-[600]">Past Attendence</p>
            {user?.Attandance?.filter(
              (att: any) => att.subject_id === subject?.id
            ).map((attendence: any) => (
              <p className="text-prime text-[14px] font-[600]">
                {new Date(attendence.time).toLocaleDateString()} -{" "}
                {new Date(attendence.time).toLocaleTimeString()}
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
              setUser({});
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axiosInstance from "../../../../../../../../utils/axiosInstance";
import toaster from "../../../../../../../../Components/Elements/Toaster";
import AdminLectureCard from "../../../../../../../../Components/AdminLectureCard";
type Lecture = {
  id: number;
  date: string;
  title: string;
  description: string;
  month: any;
  subject: any;
};
const AllLectures = () => {
  const { id, month_id } = useParams();
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const getLectures = useCallback(async () => {
    try {
      const response = await axiosInstance.get("lecture/bymonthid/" + month_id);
      if (response.status === 200) {
        setLectures(response.data);
      } else {
        toaster("error", response.data.message);
      }
    } catch (err: any) {
      toaster("error", err.response.data.message);
    }
  }, [month_id]);
  useEffect(() => {
    getLectures();
  }, [getLectures]);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full pr-4">
      <h1 className="text-[30px] font-[700] text-prime">
        All Lectures of {lectures[0]?.month.subject.subject_name} -{" "}
        {lectures[0]?.month.subject.grade} - {lectures[0]?.month.subject.year}
      </h1>
      <h2 className="text-[20px] font-[400] text-prime">
        {lectures[0]?.month.month_name}-{lectures[0]?.month.year}
      </h2>
      <ToastContainer />
      <div className="flex flex-col  justify-start gap-8 items-start h-full w-full mt-12">
        <Link
          className=" mt-4 rounded-[5px] bg-tertiary text-second-alt font-montserrat text-[16px] flex items-center justify-center  font-[700] w-fit h-[50px] px-4 shadow-md hover:shadow-none hover:scale-95 transition-all duration-200  max-md:mx-4"
          to={
            "/admin/subjects/" + id + "/months/" + month_id + "/lectures/create"
          }
        >
          Create New Lecture
        </Link>
        <div className="flex flex-crow flex-wrap justify-start gap-8 items-center h-full w-full">
          {lectures.map((lecture) => {
            return (
              <AdminLectureCard lecture={lecture} key={lecture.id} link={""} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AllLectures;

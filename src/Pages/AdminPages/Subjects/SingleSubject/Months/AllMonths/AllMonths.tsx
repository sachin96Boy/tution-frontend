/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../../../../../../utils/axiosInstance";
import toaster from "../../../../../../Components/Elements/Toaster";
import { ToastContainer } from "react-toastify";
import AdminMonthCard from "../../../../../../Components/AdminMonthCard";

const AllMonths = () => {
  const { id } = useParams();
  const [months, setMonths] = useState<any[]>([]);
  const getMonthsById = useCallback(async () => {
    try {
      const result = await axiosInstance.get("/months/bysubject/" + id);
      if (result.status === 200) {
        setMonths(result.data);
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  }, [id]);
  useEffect(() => {
    getMonthsById();
  }, [getMonthsById]);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">
        Months Of The Subject
      </h1>
      <ToastContainer />
      <div className="flex flex-col  justify-start gap-8 items-start h-full w-full mt-12">
        <div className="flex flex-crow flex-wrap justify-start gap-8 items-center h-full w-full">
          {months.map((month, index) => {
            return (
              <AdminMonthCard
                month={month}
                key={index}
                link={"/admin/subjects/" + id + "/months/"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AllMonths;

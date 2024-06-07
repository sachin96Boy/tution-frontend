/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../../../utils/axiosInstance";
import toaster from "../../../../Components/Elements/Toaster";
import { ToastContainer } from "react-toastify";
import MonthCard from "../../../../Components/MonthCard";

const EnrolledSubject = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState<any>();
  const [monthly_fee, setMonthly_fee] = useState<number>(0);
  const [paidMonths, setPaidMonths] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(false);
  const getSubject = useCallback(async () => {
    try {
      const result = await axiosInstance.get("/subjects/enrolledbyid/" + id);
      if (result.status == 200) {
        setSubject(result.data);
        if (result.data.students[0]?.enrollment_type === "FULL") {
          setMonthly_fee(result.data.monthly_fee);
        } else if (result.data.students[0]?.enrollment_type === "HALF") {
          setMonthly_fee(result.data.monthly_fee / 2);
        } else {
          setMonthly_fee(0);
        }
      } else {
        toaster("error", "error");
      }
    } catch (error: any) {
      toaster("error", "Faild");
    }
  }, [id]);
  const getPaidMonths = useCallback(async () => {
    try {
      const result = await axiosInstance.get("/months/paid/" + id);
      if (result.status == 200) {
        setPaidMonths(result.data);
      } else {
        toaster("error", "error");
      }
    } catch (error: any) {
      toaster("error", "Faild");
    }
  }, [id]);
  useEffect(() => {
    getSubject();
    getPaidMonths();
  }, [getSubject, getPaidMonths, id, refresh]);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">
        {subject?.subject_name} - {subject?.grade} - {subject?.year}
      </h1>
      <span className="text-[20px] font-[500] text-prime-alt">
        {subject?.subject_id}
      </span>
      <span className="text-[20px] font-[500] text-prime-alt">
        From :{new Date(subject?.start_date).toDateString()}
      </span>
      <span className="text-[20px] font-[500] text-prime-alt">
        End Date: {new Date(subject?.end_date).toDateString()}
      </span>
      <ToastContainer />
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        {/* <pre>{JSON.stringify({ subject, paidMonths }, null, 2)}</pre> */}
        {subject?.month.map((month: any, index: number) => {
          return (
            <MonthCard
              key={index}
              month={month}
              monthly_fee={monthly_fee}
              subject={subject}
              refresh={refresh}
              setRefresh={setRefresh}
              paid={
                paidMonths.find(
                  (paidMonth: any) => paidMonth.month.id === month.id
                )
                  ? true
                  : false
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export default EnrolledSubject;

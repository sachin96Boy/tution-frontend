/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import toaster from "./Elements/Toaster";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer } from "react-toastify";
type Props = {
  link?: string;
  subject?: string;
  refresh?: boolean;
  setRefresh?: any;
  enrolled?: boolean;
  monthly_fee: number;
  paid: boolean;
  month: {
    id: number;
    month_name: string;
    year: number;
  };
};
const MonthCard = (props: Props) => {
  const [incart, setInCart] = useState(false);
  const BuyMonthCard = useCallback(async () => {
    try {
      const result = await axiosInstance.post("/months/buymonthcard", {
        month_id: props.month.id,
        monthly_fee: props.monthly_fee,
      });
      if (result.status === 200) {
        toaster("success", result.data.message);
        props.setRefresh && props.setRefresh(!props.refresh);
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  }, []);
  return (
    <div className="font-montserrat ">
      <ToastContainer />
      <div className="w-[284px] h-[112px] bg-second-alt rounded-[10px] flex flex-row justify-start items-center pl-2 shadow-md">
        <div className="w-[95px] h-[95px] bg-tertiary rounded-[10px] text-second-alt text-[16px] font-[500] flex justify-center items-center">
          {props.month.month_name}
        </div>
        <div className="pl-2 flex flex-col justify-start items-start gap-y-2">
          <p className=" text-prime text-[14px] font-[600]">
            {props.month.year}
          </p>
          <p className=" text-prime-alt text-[12px] font-[400]">
            {props.paid ? "Paid" : "Not Paid"}
          </p>
          <p className=" text-tertiary-alt text-[16px] font-[700]">
            LKR{props.monthly_fee}.00/=
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full mt-3">
        {incart ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setInCart(!incart);
            }}
            className="w-[138px] h-[52px] bg-tertiary-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              setInCart(!incart);
            }}
            className="w-[138px] h-[52px] bg-prime text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Add to Cart
          </button>
        )}
        {props.paid ? (
          <button
            onClick={() => {
              toaster("error", "Already paid");
            }}
            className="w-[138px] h-[52px] bg-prime-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md disabled"
          >
            Allready Paid
          </button>
        ) : (
          <button
            onClick={BuyMonthCard}
            className="w-[138px] h-[52px] bg-prime text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};
export default MonthCard;

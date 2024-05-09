import { useState } from "react";

const LessonsCard = () => {
  const [incart, setInCart] = useState(false);
  return (
    <div className="font-montserrat">
      <div className="w-[284px] h-[112px] bg-white rounded-[10px] flex flex-row justify-start items-center pl-2">
        <div className="w-[95px] h-[95px] bg-[#368DF3] rounded-[10px] text-white text-[16px] font-[500] flex justify-center items-center">
          January
        </div>
        <div className="pl-2 flex flex-col justify-start items-start gap-y-2">
          <p className=" text-[#3B5079] text-[14px] font-[600]">
            2022 Biology Revision
          </p>
          <p className=" text-[#7383A1] text-[12px] font-[400]">
            By Lucia Greer
          </p>
          <p className=" text-[#DE5353] text-[16px] font-[700]">LKR 2000.00</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full mt-3">
        {incart ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setInCart(!incart);
            }}
            className="w-[138px] h-[52px] bg-[#DE5353] text-[15px] font-[500] text-white rounded-[10px]"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              setInCart(!incart);
            }}
            className="w-[138px] h-[52px] bg-[#3B5079] text-[15px] font-[500] text-white rounded-[10px]"
          >
            Add to Cart
          </button>
        )}
        <button className="w-[138px] h-[52px] bg-[#3B5079] text-[15px] font-[500] text-white rounded-[10px]">
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default LessonsCard;

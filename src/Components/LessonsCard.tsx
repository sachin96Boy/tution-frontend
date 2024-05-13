import { useState } from "react";

const LessonsCard = () => {
  const [incart, setInCart] = useState(false);
  return (
    <div className="font-montserrat ">
      <div className="w-[284px] h-[112px] bg-second-alt rounded-[10px] flex flex-row justify-start items-center pl-2 shadow-md">
        <div className="w-[95px] h-[95px] bg-tertiary rounded-[10px] text-second-alt text-[16px] font-[500] flex justify-center items-center">
          January
        </div>
        <div className="pl-2 flex flex-col justify-start items-start gap-y-2">
          <p className=" text-prime text-[14px] font-[600]">
            2022 Biology Revision
          </p>
          <p className=" text-prime-alt text-[12px] font-[400]">
            By Lucia Greer
          </p>
          <p className=" text-tertiary-alt text-[16px] font-[700]">
            LKR 2000.00
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
        <button className="w-[138px] h-[52px] bg-prime text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default LessonsCard;

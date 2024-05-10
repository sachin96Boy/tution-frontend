const CartItem = () => {
  return (
    <div className="w-full h-[112px] bg-white rounded-[10px] shadow-md flex flex-row justify-start items-center p-2 max-md:flex-wrap max-md:h-fit">
      <div className="min-w-[95px] h-[95px] bg-[#368DF3] rounded-[10px] flex justify-center items-center text-white text-[16px] font-[500] mr-2">
        January
      </div>
      <div className="pl-4 max-md:pl-0 flex flex-col justify-start items-start gap-y-2 w-full max-md:w-fit">
        <p className="text-[#3B5079] text-[14px] font-[600]">
          2022 Biology Revision{" "}
          <span className="text-[#7383A1] text-[12px] font-[400]">
            By Lucia Greer
          </span>
        </p>
        <p className="text-[#3B5079] text-[14px] font-[600]">
          15.6 Total Hours : 102 Videos
        </p>
        <p className="text-[#3B5079] text-[14px] font-[600]">
          38 Downloadable Resources
        </p>
      </div>
      <p className="text-[#DE5353] text-[16px] font-[700] mt-3 w-fit text-nowrap">
        LKR 2000.00
      </p>
    </div>
  );
};
export default CartItem;

import React from "react";

interface ShoppingCartComponentProps {
  name: string;
  Month: string;
  Auther: string;
  price: string;
  name1: string;
  name2: string;
}

const ShoppingCartComponents: React.FunctionComponent<
  ShoppingCartComponentProps
> = ({ name, Month, name1, name2, Auther, price }) => {
  return (
    <>
      <div className="grid	">
        <div className=" cart w-[600px] h-[112.62px] bg-[#FFFFFF] rounded-[10px] top-[253.54px] left-[157px]">
          <div className="h-[95.34px] bg-[#368DF3] w-[96.53px] text-center rounded-[10px] p-5">
            {Month}
          </div>

          <div>
            <h2 className="ml-3 font-bold  text-[#3B5079]">
              {name}{" "}
              <span className="ml-3 text-[#7383A1] font-bold">{Auther}</span>{" "}
              <span className=" text-[#DE5353]	text-2xl ml-14 font-bold">
                {price}
              </span>
            </h2>
            <h2 className="ml-3  text-[#3B5079] font-bold">{name1}</h2>
            <h2 className="ml-3 text-[#3B5079] font-bold">{name2}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartComponents;

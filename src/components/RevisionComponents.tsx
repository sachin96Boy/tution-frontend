import React from "react";

import "./RevisionComponent.css";

interface RevisionComponentProps {
  name: string;
  Month: string;
  Auther: string;
  price: string;
  Bname: string;
  Bbname: string;
}

const RevisionComponents: React.FunctionComponent<RevisionComponentProps> = ({
  name,
  Month,
  Bname,
  Bbname,
  Auther,
  price,
}) => {
  return (
    <>
      <div className="">
        <div className="cart bg-white">
          <div className="rounded-[10px] bg-[#368DF3] text-center p-5 w-[93px] h-[95.34px]	">
            {Month}
          </div>
          <div>
            <h2 className="ml-3  text-[#3B5079] font-[1100]">{name}</h2>
            <span className="ml-3 text-[#7383A1]">{Auther}</span><br></br>
            <span className="ml-3 text-[#DE5353]	">{price}</span>
          </div>
        </div>
        <div
          className="p-4 
"
        >
          <button className="btn bg-[#3B5079] text-white w-[138.22px] h-[51.64px] rounded-[10px]">{Bbname}</button>
          <button className="btn bg-[#3B5079] text-white w-[138.22px] h-[51.64px] rounded-[10px] ">{Bname}</button>
        </div>
      </div>
    </>
  );
};

export default RevisionComponents;

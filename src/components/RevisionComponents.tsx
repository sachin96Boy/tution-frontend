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
        <div className="cart">
          <div className="container bg-[#368DF3] size-24 text-center p-5	">
            {Month}
          </div>
          <div>
            <h2 className="p-3  text-[#3B5079]">{name}</h2>
            <span className="ml-3 text-[#7383A1]">{Auther}</span>
            <br></br>
            <span className="ml-3 text-[#DE5353]	">{price}</span>
          </div>
        </div>
        <div
          className=" ml-7 p-4 w-auto 
"
        >
          <button className="btn bg-[#3B5079] text-white">{Bbname}</button>
          <button className="btn bg-[#3B5079] text-white">{Bname}</button>
        </div>
      </div>
    </>
  );
};

export default RevisionComponents;

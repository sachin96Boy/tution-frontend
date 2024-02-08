import React from "react";

import "./RevisionComponent.css";

interface RevisionLimitComponentProps {
  name: string;
  Month: string;
  Auther: string;
  presentage: string;
  
}

const RevitionLimitComponents: React.FunctionComponent<RevisionLimitComponentProps> = ({
  name,
  Month,
  Auther,
  presentage,
}) => {
  return (
    <>
    
      <div className="w-auto">
      <div className="cart w-auto">
        <div className="container bg-[#368DF3] size-24 text-center p-5 font-bold	">
        {Month}
        </div>
        <div className="w-auto ">
          <h2 className=" ml-2 p-2 text-[#3B5079] font-bold">{name}</h2>
          <span className="ml-3  text-[#7383A1] font-bold">{Auther}</span>
          <br></br>
            <div className="skills html bg-[#DE5353] rounded-full ml-3 leading-4 mt-3 mb-3 text-center	">{presentage}</div>
        </div>
      </div>
    </div>
    </>
  );
};




export default RevitionLimitComponents
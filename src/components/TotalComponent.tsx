import React from "react";

interface TotalComponentProps {
  Title: string;
  Total: string;
  TTbutton: string;
}

const TotalComponents: React.FunctionComponent<TotalComponentProps> = ({
  Title,
  Total,
  TTbutton,
}) => {
  return (
    <>
      <div className=" w-[385px] h-[240.03px] rounded-[10px] bg-white text-primary-content mt-2">
        <h2 className="card-title text-[#3B5079] p-3 pt-4 font-bold">
          {Title}
        </h2>
        <p className="p-3 text-[#3B5079] text-6xl font-bold">{Total}</p>
        <button className="btn bg-[#DE5353] font-bold w-[352.47px] h-[58.55px] top-[416.18px] left-[915.26px]rounded-[5px]">
          {TTbutton}
        </button>
      </div>
    </>
  );
};

export default TotalComponents;

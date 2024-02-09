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
      <div className="card w-80 h-64 bg-white text-primary-content mt-4">
        <h2 className="card-title text-[#3B5079] p-3 pt-4 font-bold">
          {Title}
        </h2>
        <p className="p-3 text-[#3B5079] text-6xl font-bold">{Total}</p>
        <button className="btn mt-20  bg-[#DE5353] font-bold">
          {TTbutton}
        </button>
      </div>
    </>
  );
};

export default TotalComponents;

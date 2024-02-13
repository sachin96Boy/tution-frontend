import React from "react";

interface CardComponentProps {
  imageUrl: string;
  name: string;
  possiotion: string;
}

const CardComponent: React.FunctionComponent<CardComponentProps> = ({
  imageUrl,
  name,
  possiotion,
}) => {
  return (
    <div className=" bg-white w-[183px] h-[240px] rounded-[10px] top-[226px] left-[1169px] gap-5">
      <div className="">
      <img
        src={imageUrl}
        className=" rounded-[10px] w-[183px] p-2 h-[190px]"
        alt="Profile Picture" 
      />
      
      <h4 className="pl-3 text-[#3B5079] text-[14px]">
        <b>{name}</b>
      </h4>
      <p className="pl-3 text-[#7383A1] text-[12px] pb-3">{possiotion}</p>
      </div>
    </div>
  );
};

export default CardComponent;

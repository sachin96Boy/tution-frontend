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
    <div className="container rounded-lg  bg-white ">
      <div className="">
      <img
        src={imageUrl}
        className="size-26 rounded-lg p-3"
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

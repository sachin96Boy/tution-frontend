import React from "react";

interface ClassComponentProps {
  name: string;
  Auther: string;
  subject: string;
}

const ClassComponent: React.FunctionComponent<ClassComponentProps> = ({
  name,
  Auther,
  subject,
}) => {
  return (
    <div className="container rounded-lg sm:container  bg-white p-5 " >

        <div className="container rounded-lg  bg-blue p-2 "> 
        <h1 className="sm: p-12">{subject}</h1>

        </div>
        
      <h4 className="p-2 text-[#3B5079] text-[14px]">
        <b>{name}</b>
      </h4>
      <p className="p-2 text-[#7383A1] text-[12px] pb-3">{Auther}</p>
    </div>
  );
};

export default ClassComponent;

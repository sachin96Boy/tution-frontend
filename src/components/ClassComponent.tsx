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
    <div className="rounded-[10px] w-[183px] h-[255px] bg-white p-5 top-[225.26px]  text-center">
      <div className="">
        <div className=" rounded-[10px]  bg-blue w-[150px] h-[164.14px] top-[233.57px]">
          <h1 className="p-10  font-bold text-center  text-white ">
            {subject}
          </h1>
        </div>
        <div>
          <h4 className="p-1 font-bold text-[#3B5079] text-[14px] pt-3 ml-5">
            <b>{name}</b>
          </h4>
          <p className="p-1 text-[#7383A1] text-[12px] ml-5">{Auther}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassComponent;

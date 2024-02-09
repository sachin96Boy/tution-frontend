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
    <div className="container rounded-lg sm:container lg:container bg-white p-1 space-x-6 ">
      <div className="">
        <div className=" container rounded-lg  bg-blue w-auto h-50 space-x-6">
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

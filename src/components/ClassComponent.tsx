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
    <div className="container rounded-lg sm:container lg:container bg-white p-3 space-x-6 ">
      <div className="p-3">
        <div className=" container rounded-lg size-40 bg-blue w-auto h-50 space-x-6">
          <h1 className="pt-16 p-6 font-bold text-center sm:break-normal text-white ">
            {subject}
          </h1>
        </div>
        <div>
          <h4 className="p-1 font-bold text-[#3B5079] text-[14px] pt-3 ml-5">
            <b>{name}</b>
          </h4>
          <p className="p-2 text-[#7383A1] text-[12px] ml-5">{Auther}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassComponent;

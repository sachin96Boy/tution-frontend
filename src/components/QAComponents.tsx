import React from "react";

interface QAComponentProps {
  Title: string;
  button: string;
  subTitle: string;
}

const QAComponent: React.FunctionComponent<QAComponentProps> = ({
  Title,
  button,
  subTitle,
}) => {
  return (
    <div className="grid grid-rows-1">
      <div>
        <p className="font-bold text-[#798DB2] text-[20px] ml-5">{Title}</p>
      </div>
      <div className="flex gap-3 p-3">
        <div className="relative flex-1">
          <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </p>
          <input
            placeholder="Type to search"
            type="search"
            className="border border-gray-300 focus:ring-red-600 w-full h-[52.7px] focus:border--600 sm:text-sm rounded-lg pt-2 pb-2 pl-10 pr-8 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <button className="btn w-[182px] h-[52.7px] rounded-[10px] bg-[#3B5079] text-[#FFFFFF] text-[16px] leading-4 font-bold">
          {button}
        </button>
      </div>

      <p className="text-[#3B5079] font-bold text-[20px] ml-5">{subTitle}</p>
    </div>
  );
};

export default QAComponent;

import React from "react";

interface MessageComponentProps {
  imageUrl: string;
  imageUrl1: string;
  para: string;
  Auther: string;
  reply: string;
  paragraph: string;
  Auther1: string;
}

const MessageComponent: React.FunctionComponent<MessageComponentProps> = ({
  imageUrl,
  imageUrl1,
  para,
  Auther,
  reply,
  paragraph,
  Auther1,
}) => {
  return (
    <div className="grid grid-rows-1">
      <div className="inline-flex mr-auto ml-[2rem] md:ml-[4rem] lg:ml-[8rem] w-full mt-6">
        <img
          src={imageUrl}
          className=" rounded-[10px] w-[47px] h-[47px]"
          alt="Profile Picture"
        />
        <div className="flex flex-col ml-3">
          <p className="text-[14px] text-[#3B5079] leading-6 tracking-normal font-bold">
            {para}
          </p>
          <p className="text-[#7383A1] mt-3 text-[14px] leading-4 font-bold">
            {Auther}
          </p>
        </div>
      </div>
      <p className="mr-auto ml-[2rem] md:ml-[4rem] lg:ml-[8rem] mt-5 text-[14px] leading-4 font-bold text-[#3B5079]">
        {reply}
      </p>

      <div className="inline-flex mr-auto ml-[2rem] md:ml-[4rem] lg:ml-[8rem] w-full mt-6">
        <img
          src={imageUrl1}
          className=" rounded-[10px] w-[47px] h-[47px]"
          alt="Profile Picture"
        />
        <div className="flex flex-col ml-3">
          <p className="text-[14px] text-[#3B5079] leading-6 tracking-normal font-bold">
            {paragraph}
          </p>
          <p className="text-[#7383A1] mt-3 text-[14px] leading-4 font-bold">
            {Auther1}
          </p>
          <hr className=" mt-6 w-full border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;

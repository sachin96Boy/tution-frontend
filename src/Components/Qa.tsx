import { useState } from "react";
import SearchBox from "./Elements/SearchBox";
import PostElement from "./Elements/PostElement";
import PostReplyElement from "./Elements/PostReplyElement";

const Qa = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full flex flex-col justify-start items-center mt-8 p-24 max-md:px-8">
      <div className="w-full flex flex-row max-md:flex-col justify-center gap-4 items-center">
        <SearchBox
          placeholder="Search Question"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="w-fit px-8 h-[52px] bg-[#3B5079] text-[16px] font-[600] text-white rounded-[10px] shadow-md hover:scale-105 transition-all duration-200">
          Ask a New Question
        </button>
      </div>
      <div className="w-full mt-8">
        <h1 className="text-[20px] font-[600] text-[#3B5079]">
          All Questions on this Course
        </h1>
        <PostElement />
        <p className="text-[14px] font-[600] text-[#3B5079] ml-[164px] mt-4">
          2 reply
        </p>
        <PostReplyElement />
        <PostReplyElement />
        <div className="w-full h-[1px] bg-[#CFDBF5] mt-4"></div>

        <PostElement />
        <p className="text-[14px] font-[600] text-[#3B5079] ml-[164px] mt-4">
          2 reply
        </p>
        <PostReplyElement />
        <PostReplyElement />
        <div className="w-full h-[1px] bg-[#CFDBF5] mt-4"></div>
      </div>
    </div>
  );
};
export default Qa;

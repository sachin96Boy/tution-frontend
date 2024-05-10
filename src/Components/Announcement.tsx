import { useState } from "react";
import SearchBox from "./Elements/SearchBox";
import AnnouncementElement from "./Elements/AnnouncementElement";

const Announcement = () => {
  const [comment, setComment] = useState("");
  return (
    <div className="w-full flex flex-col justify-start items-center mt-8 p-24 max-md:px-8">
      <div className="w-full mt-8 mb-8">
        <AnnouncementElement />
        <AnnouncementElement />
        <AnnouncementElement />
      </div>
      <SearchBox
        placeholder="Enter Your Comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
    </div>
  );
};
export default Announcement;

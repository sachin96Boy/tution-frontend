import video from "../../assets/Videos/video.webm";
import { useState } from "react";
import Qa from "../../Components/Qa";
import Announcement from "../../Components/Announcement";
const MyLesson = () => {
  const [active, setActive] = useState("overview");
  const [activeB, setActiveB] = useState("q&a");
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-[#3B5079]">
        {"Subject Name "}{" "}
        <span className="text-[20px] font-[500] text-[#3B5079]">
          {"Lesson Name"}
        </span>
      </h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-start h-full w-full mt-12 pr-2">
        <video
          preload="auto"
          src={video}
          className="w-[950px] max-w-[100%] max-md:w-full  h-fit rounded-[10px]"
          controls
        ></video>
        <div className="w-[450px] max-md:max-w-[100%] min-h-[537px] bg-white rounded-[10px]">
          <div className="w-full">
            <button
              className={
                "w-[50%] h-[52px] rounded-tl-[10px] text-[#3B5079]  text-[15px] font-[500]  shadow-md  transition-all duration-200" +
                (active === "overview" ? " bg-[#DE5353] text-white" : "")
              }
              onClick={() => setActive("overview")}
            >
              Overview
            </button>
            <button
              className={
                "w-[50%] h-[52px] rounded-tr-[10px]  text-[15px] font-[500]  shadow-md  transition-all duration-200" +
                (active === "resources" ? " bg-[#DE5353] text-white" : "")
              }
              onClick={() => setActive("resources")}
            >
              Resources
            </button>
          </div>
          {active === "overview" ? (
            <div className="w-full h-full p-4 font-montserrat text-[15px] font-[500] text-[#3B5079]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
              enim. Totam amet vitae odio voluptatem dolorum, magni iure laborum
              itaque nesciunt natus maiores officia sequi odit explicabo vel
              praesentium,
              <br />
              <br />
              culpa assumenda. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Hic sunt nihil ratione provident veritatis
              distinctio, in ab dignissimos debitis impedit commodi nam soluta
              est vitae maiores, ducimus dolore eaque nemo.
            </div>
          ) : (
            <div className="flex flex-col w-full h-full p-4 font-montserrat text-[15px] font-[500] text-[#3B5079] gap-y-4">
              <p>Example Resource</p>
              <p>Example Resource</p>
              <p>Example Resource</p>
              <p>Example Resource</p>
              <p>Example Resource</p>
              <p>Example Resource</p>
              <p>Example Resource</p>
              <p>Example Resource</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-fit text-[15px] font-[500] text-[#3B5079] font-montserrat transition-all duration-200 mt-16">
        <div className="flex flex-row justify-start gap-12 items-center h-full w-full">
          <h1
            className={
              "text-[20px] font-[700] " +
              (activeB === "q&a" ? " text-[#3B5079]" : "text-[#798DB2]")
            }
            onClick={() => setActiveB("q&a")}
          >
            Q&A
          </h1>
          <h1
            className={
              "text-[20px] font-[700] " +
              (activeB === "announcements"
                ? " text-[#3B5079]"
                : "text-[#798DB2]")
            }
            onClick={() => setActiveB("announcements")}
          >
            Announcements
          </h1>
        </div>
        {activeB === "q&a" ? <Qa /> : <Announcement />}
      </div>
    </div>
  );
};
export default MyLesson;

import React, { useState } from "react";

interface NoteComponentProps {
  imageURL: string;
  button1: string;
  button2: string;
  items: string[];
  items2: string[]; // Update to accept an array of items
}

const NoteComponent: React.FunctionComponent<NoteComponentProps> = ({
  imageURL,
  button1,
  button2,
  items,
  items2,
}) => {
  const [activeTab, setActiveTab] = useState<string>("first");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="">
        <img
          src={imageURL}
          className="rounded-[10px] w-[789px] p-5 h-[537.63px]"
          alt="Profile Picture"
        />
      </div>

      <div>
        <div className="w-[400px]">
          <ul id="tabs" className="inline-flex pt-5 px-1  w-[400px] border-b">
            <li
              className={`${
                activeTab === "first" ? "bg-[#DE5353]" : "bg-white"
              } w-[197px] px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px`}
            >
              <button onClick={() => handleTabClick("first")}>{button1}</button>
            </li>
            <li
              className={`${
                activeTab === "second" ? "bg-[#DE5353]" : "bg-white"
              } px-4 text-gray-800 w-[197px] font-semibold py-2 rounded-t`}
            >
              <button onClick={() => handleTabClick("second")}>
                {button2}
              </button>
            </li>
          </ul>

          <div id="tab-contents">
            <div
              id="first"
              className={`p-4  mt-5 ${activeTab !== "first" && "hidden"}`}
            >
              {items.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div
              id="second"
              className={`p-4 mt-5 ${activeTab !== "second" && "hidden"}`}
            >
              {items2.map((items2, index) => (
                <div key={index}>{items2}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteComponent;

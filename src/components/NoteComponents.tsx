import React from "react";

interface NoteComponentProps {
  imageURL: string;
  button1: string;
  button2: string;
  items: string[]; // Update to accept an array of items
}

const NoteComponent: React.FunctionComponent<NoteComponentProps> = ({
  imageURL,
  button1,
  button2,
  items,
}) => {
  return (
    <>
      <div className="">
        <img
          src={imageURL}
          className=" rounded-[10px] w-[789px] p-5 h-[537.63px]"
          alt="Profile Picture"
        />
      </div>

      <div>
        <div>
          <div role="tablist" className="p-5">
            <a
              role="tab"
              className="tab bg-[#FFFFFF] w-[197px] rounded-[10px, 0px, 0px, 0px] text-[16px] text-[#3B5079] leading-4 font-bold "
            >
              {button1}
            </a>
            <a
              role="tab"
              className="tab tab-active w-[197px] rounded-[10px, 0px, 0px, 0px] bg-[#DE5353] text-[#FFFFFF] text-[16px] leading-4 font-bold"
            >
              {button2}
            </a>
            <ol className="menu bg-base-200 rounded-[10px] w-[398px] h-[473px] text-[15px] text-[#3B5079] leading-4 font-bold ">
              {/* Map over items array and render each item */}
              {items.map((item, index) => (
                <li key={index} className="mt-5">
                  <a>{item}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteComponent;

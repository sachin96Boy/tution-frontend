import TemplateDashboard from "../TemplateDashboard";
import NoteComponent from "../NoteComponents";
import QAComponent from "../QAComponents";
import MessageComponent from "../messageComponent";

function Note() {
  // Define an array of items
  const items = [
    "Resources sample 01",
    "Resources sample 02",
    "Resources sample 03",
  ];
  const items2 = [
    "Resources sample ",
    "Resources sample ",
    "Resources sample ",
  ];

  return (
    <TemplateDashboard>
      <h2 className="p-2 font-bold  text-[#3B5079]  text-3xl">
        2022 Biology Revision{" "}
        <span className="ml-3 text-[#7383A1] font-bold  text-2xl">March</span>{" "}
      </h2>
      <div className="grid grid-cols gap-4 bg-slate-100 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
        {/* Pass the array of items to NoteComponent */}
        <NoteComponent
          imageURL="./src/assets/bio.png"
          button1="OverView"
          button2="Resources"
          items={items}
          items2={items2}
        />
        {/* Add other components or elements if needed */}
        <div className="grid grid-rows-1">
          <QAComponent
            Title="QA Announcement"
            button="Ask New Questions"
            subTitle="All Question In this Course"
          />
          <MessageComponent
            imageUrl="./src/assets/bio.png"
            imageUrl1="./src/assets/bio.png"
            para="The plural noun phrase beautiful people doesn't refer to the overall looks of the people mentioned, but rather the elegance and sumptuousness of their lives."
            Auther="by Teodo Bishop"
            Auther1="by Toodooo shaa"
            paragraph="There are five breakpoints by default, inspired by common device resolutions:"
            reply="1 reply"
          />
          <MessageComponent
            imageUrl="./src/assets/bio.png"
            imageUrl1="./src/assets/bio.png"
            para="The plural noun phrase beautiful people doesn't refer to the overall looks of the people mentioned, but rather the elegance and sumptuousness of their lives."
            Auther="by Teodo Bishop"
            Auther1="by Toodooo shaa"
            paragraph="There are five breakpoints by default, inspired by common device resolutions:"
            reply="2 reply"
          />
        </div>
      </div>
    </TemplateDashboard>
  );
}

export default Note;

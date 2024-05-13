import profile_pic from "../../assets/Images/Profile_photo.png";
import uparrow from "../../assets/Images/uparrow.png";
const AnnouncementElement = () => {
  return (
    <div className="h-fit">
      <div className="w-fit flex flex-row justify-start items-start mt-8 py-4 max-md:px-2">
        <img src={profile_pic} alt="" className="w-[47px] h-[47px] mr-4" />
        <div className="w-full mr-4">
          <p className="text-[14px] font-[600] text-prime text-justify px-4 w-[360px] max-md:w-full">
            Lucia Greer Post and Announcement
          </p>
          <p className="text-[14px] font-[400] text-prime-alt text-justify mt-2 px-4">
            8 hours ago
          </p>
        </div>
        <div className="min-w-[28px] min-h-[28px] bg-[#CFDBF5] rounded-[5px] flex justify-center items-center shadow-sm">
          <img src={uparrow} alt="" className="w-[12px] h-[12px]" />
        </div>
      </div>
      <h1 className="text-[20px] font-[600] text-prime px-4 mt-8 mb-4">
        All Questions on this Course
      </h1>
      <p className="text-[14px] font-[600] text-prime text-justify px-4 max-md:w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus
        obcaecati quae repellendus sit voluptatem praesentium, quidem rem illo
        libero pariatur reprehenderit doloribus vero ratione nostrum tempora.
        Ipsum, adipisci? Fugiat. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Asperiores dolores vero deserunt rerum quibusdam,
        atque nesciunt autem, modi et, eius id! Architecto consequatur
        accusantium hic illo vel repellendus, natus at?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus
        obcaecati quae repellendus sit voluptatem praesentium, quidem rem illo
        libero pariatur reprehenderit doloribus vero ratione nostrum tempora.
        Ipsum, adipisci? Fugiat. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Asperiores dolores vero deserunt rerum quibusdam,
        atque nesciunt autem, modi et, eius id! Architecto consequatur
        accusantium hic illo vel repellendus, natus at?
      </p>
      <div className="w-full h-[1px] bg-[#CFDBF5] mt-4"></div>
    </div>
  );
};
export default AnnouncementElement;

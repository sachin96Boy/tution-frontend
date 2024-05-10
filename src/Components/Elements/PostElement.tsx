import profile_pic from "../../assets/Images/Profile_photo.png";
import uparrow from "../../assets/Images/uparrow.png";
const PostElement = () => {
  return (
    <div className="w-full flex flex-row justify-start items-start mt-8 px-24 py-4 max-md:px-2">
      <img src={profile_pic} alt="" className="w-[47px] h-[47px] mr-4" />
      <div className="w-full mr-4">
        <p className="text-[14px] font-[600] text-[#3B5079] text-justify px-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
          voluptatum. Molestias sequi, inventore vitae hic laborum neque
          laboriosam accusamus, nesciunt, quae deleniti doloremque tenetur
          quibusdam beatae impedit obcaecati modi a. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Esse odit unde velit soluta quod veniam
          nulla exercitationem consequuntur! Iusto ut sint ex, eum sunt maiores
          quam? Provident nesciunt facere quisquam!
        </p>
        <p className="text-[14px] font-[400] text-[#7383A1] text-justify mt-2 px-4">
          {"by " + "Lucia Greer"}
        </p>
      </div>
      <div className="w-[28px] h-[28px] bg-[#CFDBF5] rounded-[5px] flex justify-center items-center shadow-sm">
        <img src={uparrow} alt="" className="w-[12px] h-[12px]" />
      </div>
    </div>
  );
};
export default PostElement;

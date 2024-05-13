import register_image from "../../assets/Images/login_banner.png";
import ProfileUpdateForm from "../../Components/Forms/ProfileUpdateForm";

const ProfileUpdate = () => {
  return (
    <div className=" flex flex-row w-full min-h-screen bg-second">
      <div className="max-md:hidden min-h-full w-1/3 p-4 pr-0">
        <img
          style={{
            backgroundImage: `url(${register_image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-full w-full rounded-[10px]"
          alt=""
        />
      </div>
      <div className=" max-md:w-full min-h-full min-w-[340px] w-full bg-second flex flex-col justify-center items-center p-4">
        <ProfileUpdateForm />
      </div>
    </div>
  );
};
export default ProfileUpdate;

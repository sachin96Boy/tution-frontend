/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import profile_pic from "../../assets/Images/Profile_pic.png";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-row items-center">
      <h2 className=" font-montserrat text-[14px] font-[700] mr-2">
        {user.first_name + " " + user.last_name}
      </h2>
      <img
        src={profile_pic}
        className=" rounded-md w-[52px] h-[52px] mr-2"
        alt=""
      />
    </div>
  );
};
export default Profile;

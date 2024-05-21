/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import profile_pic from "../../assets/Images/Profile_pic.png";
import axios from "axios";
import { baseURL } from "../../const/const";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const getsession = async () => {
    try {
      const result = await axios.get(baseURL + "/user/session", {
        withCredentials: true,
      });
      if (result.status === 200) {
        setUser(result.data);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
    }
  };
  useEffect(() => {
    getsession();
  }, []);
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

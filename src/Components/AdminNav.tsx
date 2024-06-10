/* eslint-disable @typescript-eslint/no-explicit-any */
import NavItems from "./Elements/NavItems";
import home_nav_icon from "../assets/Images/Home_nav_icon.png";
import teachers_nav_icon from "../assets/Images/teachers_nav_icon.png";
import teachers_nav_icon_active from "../assets/Images/teachers_nav_icon_active.png";
import classes_nav_icon from "../assets/Images/Classes_nav_icon.png";
import classes_nav_icon_active from "../assets/Images/Classess_nav_icon_active.png";
import profile_nav_icon from "../assets/Images/Profile_nav_icon.png";
import profile_nav_icon_active from "../assets/Images/profile_nav_icon_active.png";
import contact_nav_icon from "../assets/Images/Contact_nav_icon.png";
import logout_nav_icon from "../assets/Images/Logout_nav_icon.png";
import UserContext from "../contexts/UserContext";
import axiosInstance from "../utils/axiosInstance";
import toaster from "../Components/Elements/Toaster";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { useNavigate } from "react-router";
type Props = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};
const AdminNav = (props: Props) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const result = await axiosInstance.get("/api/v1/auth/logout");
      if (result.status === 200) {
        setUser(result.data);
        navigate("/login");
      } else {
        toaster("error", result.data.message);
      }
    } catch (err: any) {
      toaster("error", err.response.data.message);
    }
  };
  return (
    <div className="max-md:hidden min-w-[120px] flex flex-col justify-start pt-[22px] items-center">
      <ul className="max-md:hidden py-8 flex flex-col items-center w-[80px] bg-second-alt rounded-[5px] h-[95vh] justify-between fixed">
        <ToastContainer />
        <NavItems link="/admin" icon={home_nav_icon} />
        <div className="flex flex-col items-center h-[50%] justify-between">
          <NavItems
            link="/admin/subjects"
            icon={
              props.active === "classes"
                ? classes_nav_icon_active
                : classes_nav_icon
            }
            onClick={() => props.setActive("classes")}
          />
          <NavItems
            link="/admin/teachers"
            icon={
              props.active === "teachers"
                ? profile_nav_icon_active
                : profile_nav_icon
            }
            onClick={() => props.setActive("teachers")}
          />
          <NavItems
            link="/admin/students"
            icon={
              props.active === "students"
                ? teachers_nav_icon_active
                : teachers_nav_icon
            }
            onClick={() => props.setActive("students")}
          />
          <NavItems
            link="/admin/contact"
            icon={
              props.active === "contact" ? contact_nav_icon : contact_nav_icon
            }
            onClick={() => props.setActive("contact")}
          />
        </div>
        <NavItems
          link=""
          icon={logout_nav_icon}
          onClick={() => {
            logout();
          }}
        />
      </ul>
    </div>
  );
};
export default AdminNav;

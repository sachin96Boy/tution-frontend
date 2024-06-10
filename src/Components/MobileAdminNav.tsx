/* eslint-disable @typescript-eslint/no-explicit-any */
import MobileNavItems from "./Elements/MobileNavItems";
import home_nav_icon from "../assets/Images/Home_nav_icon.png";
import teachers_nav_icon from "../assets/Images/teachers_nav_icon.png";
import teachers_nav_icon_active from "../assets/Images/teachers_nav_icon_active.png";
import classes_nav_icon from "../assets/Images/Classes_nav_icon.png";
import classes_nav_icon_active from "../assets/Images/Classess_nav_icon_active.png";
import profile_nav_icon from "../assets/Images/Profile_nav_icon.png";
import profile_nav_icon_active from "../assets/Images/profile_nav_icon_active.png";
import contact_nav_icon from "../assets/Images/Contact_nav_icon.png";
import logout_nav_icon from "../assets/Images/Logout_nav_icon.png";
import bell_icon from "../assets/Images/Bell_icon.png";
import menu_icon from "../assets/Images/men_icon.png";
import close_icon from "../assets/Images/close_icon.png";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router";
import axiosInstance from "../utils/axiosInstance";
import toaster from "./Elements/Toaster";
import Counter from "./Elements/Counter";

type Props = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  notifications: number;
};
const MobileAdminNav = (props: Props) => {
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
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  return (
    <div
      id="mobile_nav"
      className="hidden max-md:flex flex-col w-full h-[100px] justify-between items-center pl-4 max-md:pl-1"
    >
      <button
        className="w-fit h-fit p-1 bg-second-alt border-2 border-prime rounded-md fixed left-4 top-4 z-10"
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
      >
        <img
          src={mobileMenuActive ? close_icon : menu_icon}
          className="w-[32px] h-[32px]"
          alt=""
        />
      </button>
      <div
        className={
          "hidden flex-col w-screen h-screen justify-between items-center fixed top-0 left-0 bg-second z-0 " +
          (mobileMenuActive ? "max-md:flex" : "max-md:hidden")
        }
      >
        <ul
          className={
            "hidden flex-col w-screen h-screen overflow-y-scroll justify-start gap-y-4 mt-[80px] p-8 items-center fixed top-0 left-0 bg-second z-0 " +
            (mobileMenuActive ? "max-md:flex" : "max-md:hidden")
          }
        >
          {/* <div className="flex flex-row w-full items-center p-2 h-fit bg-second-alt rounded-[5px]">
            <NavItems link="/admin" icon={home_nav_icon} />
            <p className="text-prime text-[18px] ml-4 font-[600]">Home</p>
          </div> */}
          <MobileNavItems
            link="/admin"
            icon={home_nav_icon}
            name="Home"
            onClick={() => props.setActive("home")}
          />

          {/* <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
            <NavItems
              link="/admin/subjects"
              icon={
                active === "classes"
                  ? classes_nav_icon_active
                  : classes_nav_icon
              }
              onClick={() => setActive("classes")}
            />
            <p className="text-prime text-[18px] ml-4 font-[600]">My Classes</p>
          </div> */}
          <MobileNavItems
            link="/admin/subjects"
            icon={
              props.active === "classes"
                ? classes_nav_icon_active
                : classes_nav_icon
            }
            name="Classes"
            onClick={() => props.setActive("classes")}
          />

          {/* //   <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
        //     <NavItems
        //       link="/admin/teachers"
        //       icon={
        //         active === "teachers"
        //           ? profile_nav_icon_active
        //           : profile_nav_icon
        //       }
        //       onClick={() => setActive("teachers")}
        //     />
        //     <p className="text-prime text-[18px] ml-4 font-[600]">My Profile</p>
        //   </div> */}

          <MobileNavItems
            link="/admin/teachers"
            icon={
              props.active === "teachers"
                ? profile_nav_icon_active
                : profile_nav_icon
            }
            name="Teachers"
            onClick={() => props.setActive("teachers")}
          />
          <MobileNavItems
            link="/admin/students"
            icon={
              props.active === "students"
                ? teachers_nav_icon_active
                : teachers_nav_icon
            }
            name="Students"
            onClick={() => props.setActive("students")}
          />
          {/* <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
            <NavItems
              link="/admin/contact"
              icon={active === "contact" ? contact_nav_icon : contact_nav_icon}
              onClick={() => setActive("contact")}
            />
            <p className="text-prime text-[18px] ml-4 font-[600]">Contact</p>
          </div> */}
          <MobileNavItems
            link="/admin/contact"
            icon={
              props.active === "contact" ? contact_nav_icon : contact_nav_icon
            }
            name="Contact"
            onClick={() => props.setActive("contact")}
          />

          <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
            <Counter
              link="admin/notifications"
              icon={bell_icon}
              count={props.notifications}
            />
            <p className="text-prime text-[18px] ml-1 font-[600]">
              Notifications
            </p>
          </div>

          {/* <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
            <NavItems
              link=""
              icon={logout_nav_icon}
              onClick={() => {
                logout();
              }}
            />
            <p className="text-prime text-[18px] ml-4 font-[600]">Logout</p>
          </div> */}
          <MobileNavItems
            link=""
            icon={logout_nav_icon}
            name="Logout"
            onClick={() => {
              logout();
            }}
          />
        </ul>
      </div>
    </div>
  );
};
export default MobileAdminNav;

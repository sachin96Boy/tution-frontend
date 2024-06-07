/* eslint-disable @typescript-eslint/no-explicit-any */
import MobileNavItems from "./Elements/MobileNavItems";
import home_nav_icon from "../assets/Images/Home_nav_icon.png";
import teachers_nav_icon from "../assets/Images/teachers_nav_icon.png";
import teachers_nav_icon_active from "../assets/Images/teachers_nav_icon_active.png";
import classes_nav_icon from "../assets/Images/Classes_nav_icon.png";
import classes_nav_icon_active from "../assets/Images/Classess_nav_icon_active.png";
import profile_nav_icon from "../assets/Images/Profile_nav_icon.png";
import profile_nav_icon_active from "../assets/Images/profile_nav_icon_active.png";
import payment_nav_icon from "../assets/Images/payment_nav_icon.png";
import contact_nav_icon from "../assets/Images/Contact_nav_icon.png";
import logout_nav_icon from "../assets/Images/Logout_nav_icon.png";
import bell_icon from "../assets/Images/Bell_icon.png";
import shop_icon from "../assets/Images/shop_icon.png";
import menu_icon from "../assets/Images/men_icon.png";
import close_icon from "../assets/Images/close_icon.png";
import { useState } from "react";
import Counter from "./Elements/Counter";
import axiosInstance from "../utils/axiosInstance";
import toaster from "../Components/Elements/Toaster";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext";

type Props = {
  active: string;
  setActive: (active: string) => void;
  notifications: number;
  shopCount: number;
};
const MobileUserNav = (props: Props) => {
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
          <MobileNavItems
            link="/student"
            icon={props.active === "active" ? home_nav_icon : home_nav_icon}
            onClick={() => props.setActive("home")}
            name="Home"
          />

          <MobileNavItems
            link="/student/teachers"
            icon={
              props.active === "teachers"
                ? teachers_nav_icon_active
                : teachers_nav_icon
            }
            onClick={() => props.setActive("teachers")}
            name="Teachers"
          />

          <MobileNavItems
            link="/student/subjects"
            icon={
              props.active === "classes"
                ? classes_nav_icon_active
                : classes_nav_icon
            }
            onClick={() => props.setActive("classes")}
            name="My Classes"
          />

          <MobileNavItems
            link="/student/profile"
            icon={
              props.active === "profile"
                ? profile_nav_icon_active
                : profile_nav_icon
            }
            onClick={() => props.setActive("profile")}
            name="My Profile"
          />

          <MobileNavItems
            link="/student/payment"
            icon={
              props.active === "payment" ? payment_nav_icon : payment_nav_icon
            }
            onClick={() => props.setActive("payment")}
            name="Payment"
          />
          <MobileNavItems
            link="/student/contact"
            icon={contact_nav_icon}
            onClick={() => props.setActive("contact")}
            name="Contact Us"
          />

          <div className="flex flex-row w-full hover:scale-105 transition-all duration-200 p-2 h-fit items-center bg-second-alt rounded-[5px]">
            <Counter
              link="/student/notifications"
              icon={bell_icon}
              count={props.notifications}
            />
            <p className="text-prime text-[18px] ml-1 font-[600]">
              Notifications
            </p>
          </div>
          <div className="flex flex-row w-full hover:scale-105 transition-all duration-200 p-2 h-fit items-center bg-second-alt rounded-[5px]">
            <Counter
              link="/student/shopping"
              icon={shop_icon}
              count={props.shopCount}
            />
            <p className="text-prime text-[18px] ml-1 font-[600]">
              Shopping Cart
            </p>
          </div>
          <MobileNavItems
            link=""
            icon={logout_nav_icon}
            onClick={() => {
              logout();
            }}
            name="Logout"
          />
        </ul>
        <ToastContainer />
      </div>
    </div>
  );
};
export default MobileUserNav;

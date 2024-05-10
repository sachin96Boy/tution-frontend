/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from "react-router";
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
import NavItems from "../Components/Elements/NavItems";
import { useState } from "react";
import Counter from "../Components/Elements/Counter";
import profile_pic from "../assets/Images/Profile_pic.png";
import SearchBox from "../Components/Elements/SearchBox";
import Profile from "../Components/Elements/Profile";

const Layout = () => {
  const [notifications, setNotifications] = useState(5);
  const [shopCount, setShopCount] = useState(8);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({ name: "Test User", image: profile_pic });
  const [active, setActive] = useState("active");
  return (
    <div className="flex flex-row min-h-screen w-full bg-[#f2f6ff]">
      <div className="min-w-[120px] flex flex-col justify-start pt-[22px] items-center">
        <ul className="py-8 flex flex-col items-center w-[80px] bg-[#FDFDFD] rounded-[5px] h-[95vh] justify-between fixed">
          <NavItems link="/" icon={home_nav_icon} />
          <div className="flex flex-col items-center h-[50%] justify-between">
            <NavItems
              link="/teachers"
              icon={
                active === "teachers"
                  ? teachers_nav_icon_active
                  : teachers_nav_icon
              }
              onClick={() => setActive("teachers")}
            />
            <NavItems
              link="/classes"
              icon={
                active === "classes"
                  ? classes_nav_icon_active
                  : classes_nav_icon
              }
              onClick={() => setActive("classes")}
            />
            <NavItems
              link="/profile"
              icon={
                active === "profile"
                  ? profile_nav_icon_active
                  : profile_nav_icon
              }
              onClick={() => setActive("profile")}
            />
            <NavItems
              link="/payment"
              icon={active === "payment" ? payment_nav_icon : payment_nav_icon}
              onClick={() => setActive("payment")}
            />
            <NavItems
              link="/contact"
              icon={active === "contact" ? contact_nav_icon : contact_nav_icon}
              onClick={() => setActive("contact")}
            />
          </div>
          <NavItems link="/logout" icon={logout_nav_icon} />
        </ul>
      </div>
      <div className="flex flex-col w-full h-full justify-between items-center pl-4 max-md:pl-1 bg-[#f2f6ff]">
        <div className="flex flex-row w-full min-h-[100px] justify-between items-center mt-[28px] pr-16 max-md:pr-2 flex-wrap gap-y-2  max-md:justify-end">
          <div className="flex flex-row items-center max-md:flex-wrap gap-y-4 max-md:justify-end">
            <SearchBox
              value={search}
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
            />
            <Counter
              link="/notifications"
              icon={bell_icon}
              count={notifications}
            />
            <Counter link="/shopping" icon={shop_icon} count={shopCount} />
          </div>
          <Profile user={user} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;

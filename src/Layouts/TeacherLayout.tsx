/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, useNavigate } from "react-router";
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
import NavItems from "../Components/Elements/NavItems";
import { useContext, useEffect, useState } from "react";
import Counter from "../Components/Elements/Counter";
import SearchBox from "../Components/Elements/SearchBox";
import Profile from "../Components/Elements/Profile";
import menu_icon from "../assets/Images/men_icon.png";
import close_icon from "../assets/Images/close_icon.png";
import UserContext from "../contexts/UserContext";
import axiosInstance from "../utils/axiosInstance";
import toaster from "../Components/Elements/Toaster";
import { ToastContainer } from "react-toastify";
const TeacherLayout = () => {
  const [notifications, setNotifications] = useState(5);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("active");
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const result = await axiosInstance.get("/api/v1/auth/logout");
      if (result.status === 200) {
        setUser(result.data);
        navigate("/teacher/login");
      } else {
        toaster("error", result.data.message);
      }
    } catch (err: any) {
      toaster("error", err.response.data.message);
    }
  };
  const chechkSession = async () => {
    try {
      const result = await axiosInstance.get("/user/session");
      if (result.status === 200) {
        setUser(result.data);
        if (result.data.type !== "teacher") {
          navigate("/teacher/login");
        }
      } else {
        toaster("error", result.data.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toaster("error", err.response.data.message);
      navigate("/teacher/login");
    }
  };
  useEffect(() => {
    chechkSession();
  }, []);
  return (
    <div className="flex flex-row min-h-screen w-full bg-second">
      <div className="max-md:hidden min-w-[120px] flex flex-col justify-start pt-[22px] items-center">
        <ul className="max-md:hidden py-8 flex flex-col items-center w-[80px] bg-second-alt rounded-[5px] h-[95vh] justify-between fixed">
          <NavItems link="/teacher" icon={home_nav_icon} />
          <div className="flex flex-col items-center h-[50%] justify-between">
            <NavItems
              link="/teacher/classes"
              icon={
                active === "classes"
                  ? classes_nav_icon_active
                  : classes_nav_icon
              }
              onClick={() => setActive("classes")}
            />
            <NavItems
              link="/teacher/profile"
              icon={
                active === "profile"
                  ? profile_nav_icon_active
                  : profile_nav_icon
              }
              onClick={() => setActive("profile")}
            />
            <NavItems
              link="/teacher/students"
              icon={
                active === "students"
                  ? teachers_nav_icon_active
                  : teachers_nav_icon
              }
              onClick={() => setActive("students")}
            />
            <NavItems
              link="/teacher/contact"
              icon={active === "contact" ? contact_nav_icon : contact_nav_icon}
              onClick={() => setActive("contact")}
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
      <div className="flex flex-col w-full h-full justify-between items-center pl-4 max-md:pl-1 bg-second">
        <div className="max-md:hidden flex flex-row w-full min-h-[100px] justify-between items-center mt-[28px] pr-16 max-md:pr-2 flex-wrap gap-y-2  max-md:justify-end">
          <div className="flex flex-row items-center max-md:flex-wrap gap-y-4 max-md:justify-end">
            <SearchBox
              value={search}
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
            />
            <Counter
              link="/teacher/notifications"
              icon={bell_icon}
              count={notifications}
            />
          </div>
          <Profile />
        </div>
        <ToastContainer />
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
              <div className="flex flex-row w-full items-center p-2 h-fit bg-second-alt rounded-[5px]">
                <NavItems link="/" icon={home_nav_icon} />
                <p className="text-prime text-[18px] ml-4 font-[600]">Home</p>
              </div>

              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <NavItems
                  link="/teacher/classes"
                  icon={
                    active === "classes"
                      ? classes_nav_icon_active
                      : classes_nav_icon
                  }
                  onClick={() => setActive("classes")}
                />
                <p className="text-prime text-[18px] ml-4 font-[600]">
                  My Classes
                </p>
              </div>
              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <NavItems
                  link="/teacher/profile"
                  icon={
                    active === "profile"
                      ? profile_nav_icon_active
                      : profile_nav_icon
                  }
                  onClick={() => setActive("profile")}
                />
                <p className="text-prime text-[18px] ml-4 font-[600]">
                  My Profile
                </p>
              </div>
              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <NavItems
                  link="/teacher/students"
                  icon={
                    active === "students"
                      ? teachers_nav_icon_active
                      : teachers_nav_icon
                  }
                  onClick={() => setActive("students")}
                />
                <p className="text-prime text-[18px] ml-4 font-[600]">
                  Students
                </p>
              </div>
              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <NavItems
                  link="/teacher/contact"
                  icon={
                    active === "contact" ? contact_nav_icon : contact_nav_icon
                  }
                  onClick={() => setActive("contact")}
                />
                <p className="text-prime text-[18px] ml-4 font-[600]">
                  Contact
                </p>
              </div>

              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <Counter
                  link="/notifications"
                  icon={bell_icon}
                  count={notifications}
                />
                <p className="text-prime text-[18px] ml-1 font-[600]">
                  Notifications
                </p>
              </div>

              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <NavItems
                  link=""
                  icon={logout_nav_icon}
                  onClick={() => {
                    logout();
                  }}
                />
                <p className="text-prime text-[18px] ml-4 font-[600]">Logout</p>
              </div>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default TeacherLayout;

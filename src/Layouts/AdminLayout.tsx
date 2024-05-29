/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useNavigate } from "react-router";
import bell_icon from "../assets/Images/Bell_icon.png";
import { useCallback, useContext, useEffect, useState } from "react";
import Counter from "../Components/Elements/Counter";
import SearchBox from "../Components/Elements/SearchBox";
import Profile from "../Components/Elements/Profile";
import UserContext from "../contexts/UserContext";
import axiosInstance from "../utils/axiosInstance";
import toaster from "../Components/Elements/Toaster";
import { ToastContainer } from "react-toastify";
import AdminNav from "../Components/AdminNav";
import MobileAdminNav from "../Components/MobileAdminNav";
const AdminLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notifications, setNotifications] = useState(5);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("active");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const chechkSession = useCallback(async () => {
    try {
      const result = await axiosInstance.get("/user/session", {
        withCredentials: true,
      });
      if (result.status === 200) {
        setUser(result.data);
        if (result.data.type !== "admin") {
          navigate("/admin/login");
        }
      } else {
        toaster("error", result.data.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toaster("error", err.response.data.message);
      navigate("/admin/login");
    }
  }, [navigate, setUser]);
  useEffect(() => {
    chechkSession();
    setNotifications(5);
  }, [chechkSession]);

  return (
    <div className="flex flex-row min-h-screen w-full bg-second">
      <AdminNav active={active} setActive={setActive} />
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
              link="/admin/notifications"
              icon={bell_icon}
              count={notifications}
            />
          </div>
          <Profile />
        </div>
        <ToastContainer />
        {/* <div
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
                <NavItems link="/admin" icon={home_nav_icon} />
                <p className="text-prime text-[18px] ml-4 font-[600]">Home</p>
              </div>

              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <NavItems
                  link="/admin/subjects"
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
                  link="/admin/teachers"
                  icon={
                    active === "teachers"
                      ? profile_nav_icon_active
                      : profile_nav_icon
                  }
                  onClick={() => setActive("teachers")}
                />
                <p className="text-prime text-[18px] ml-4 font-[600]">
                  My Profile
                </p>
              </div>
              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <NavItems
                  link="/admin/students"
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
                  link="/admin/contact"
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
                  link="admin/notifications"
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
        </div> */}
        <MobileAdminNav
          active={active}
          setActive={setActive}
          notifications={notifications}
        />
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, useNavigate } from "react-router";
import bell_icon from "../assets/Images/Bell_icon.png";
import shop_icon from "../assets/Images/shop_icon.png";
import { useCallback, useContext, useEffect, useState } from "react";
import Counter from "../Components/Elements/Counter";
import SearchBox from "../Components/Elements/SearchBox";
import Profile from "../Components/Elements/Profile";
import UserContext from "../contexts/UserContext";
import axiosInstance from "../utils/axiosInstance";
import toaster from "../Components/Elements/Toaster";
import { ToastContainer } from "react-toastify";
import UserNav from "../Components/UserNav";
import MobileUserNav from "../Components/MobileUserNav";

const StudentLayout = () => {
  const [notifications, setNotifications] = useState(5);
  const [shopCount, setShopCount] = useState(8);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("active");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const chechkSession = useCallback(async () => {
    try {
      const result = await axiosInstance.get("/user/session");
      if (result.status === 200) {
        setUser(result.data);
        if (result.data.type !== "student") {
          navigate("/login");
        }
      } else {
        toaster("error", result.data.message);
      }
    } catch (err: any) {
      toaster("error", err.response.data.message);
      navigate("/login");
    }
  }, [navigate, setUser]);
  useEffect(() => {
    chechkSession();
    setNotifications(5);
    setShopCount(8);
  }, [chechkSession]);
  return (
    <div
      id="Student-Layout"
      className="flex flex-row min-h-screen w-full bg-second"
    >
      <div
        id="Left-Side-Bar"
        className="max-md:hidden min-w-[120px] flex flex-col justify-start pt-[22px] items-center"
      >
        <UserNav active={active} setActive={setActive} />
      </div>
      <div
        id="Main-Content"
        className="flex flex-col w-full h-full justify-between items-center pl-4 max-md:pl-1 bg-second"
      >
        <div
          id="Top-Bar"
          className="max-md:hidden flex flex-row w-full min-h-[100px] justify-between items-center mt-[28px] pr-16 max-md:pr-2 flex-wrap gap-y-2  max-md:justify-end"
        >
          <div
            id="Top-Bar-left"
            className="flex flex-row items-center max-md:flex-wrap gap-y-4 max-md:justify-end"
          >
            <SearchBox
              value={search}
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
            />
            <Counter
              link="/student/notifications"
              icon={bell_icon}
              count={notifications}
            />
            <Counter
              link="/student/shopping"
              icon={shop_icon}
              count={shopCount}
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
              <MobileNavItems
                link="/student"
                icon={active === "active" ? home_nav_icon : home_nav_icon}
                onClick={() => setActive("home")}
                name="Home"
              />

              <MobileNavItems
                link="/student/teachers"
                icon={
                  active === "teachers"
                    ? teachers_nav_icon_active
                    : teachers_nav_icon
                }
                onClick={() => setActive("teachers")}
                name="Teachers"
              />

              <MobileNavItems
                link="/student/classes"
                icon={
                  active === "classes"
                    ? classes_nav_icon_active
                    : classes_nav_icon
                }
                onClick={() => setActive("classes")}
                name="My Classes"
              />

              <MobileNavItems
                link="/student/profile"
                icon={
                  active === "profile"
                    ? profile_nav_icon_active
                    : profile_nav_icon
                }
                onClick={() => setActive("profile")}
                name="My Profile"
              />

              <MobileNavItems
                link="/student/payment"
                icon={
                  active === "payment" ? payment_nav_icon : payment_nav_icon
                }
                onClick={() => setActive("payment")}
                name="Payment"
              />
              <MobileNavItems
                link="/student/contact"
                icon={contact_nav_icon}
                onClick={() => setActive("contact")}
                name="Contact Us"
              />

              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <Counter
                  link="/student/notifications"
                  icon={bell_icon}
                  count={notifications}
                />
                <p className="text-prime text-[18px] ml-1 font-[600]">
                  Notifications
                </p>
              </div>
              <div className="flex flex-row w-full p-2 h-fit items-center bg-second-alt rounded-[5px]">
                <Counter
                  link="/student/shopping"
                  icon={shop_icon}
                  count={shopCount}
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
          </div>
        </div> */}
        <MobileUserNav
          active={active}
          setActive={setActive}
          notifications={notifications}
          shopCount={shopCount}
        />
        <Outlet />
      </div>
    </div>
  );
};
export default StudentLayout;

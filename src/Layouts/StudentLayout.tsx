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
    <div className="flex flex-row min-h-screen w-full bg-second">
      <UserNav active={active} setActive={setActive} />
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

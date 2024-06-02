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

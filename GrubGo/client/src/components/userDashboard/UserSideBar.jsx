import React from "react";
import { GrTransaction } from "react-icons/gr";
import { TbChartTreemap } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { key: "overview", title: "OverView", icons: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icons: <CgProfile /> },
    { key: "orders", title: "Orders", icons: <FaCartShopping /> },
    { key: "transactions", title: "Transactions", icons: <GrTransaction /> },
    { key: "helpdesk", title: "Help Desk", icons: <RiCustomerService2Fill /> },
  ];

  const { setUser, setIsLogin } = useAuth();
  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      sessionStorage.removeItem("GrubGoUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown error");
    }
  };

  return (
    <>
      <div className="p-2 flex-col justify-around h-full">
        {" "}
        <div>
          <div className="text-xl font-bold flex gap-4 align-text-bottom h-10 ">
            {" "}
            <button
              className="hover:scale-105 "
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <GiHamburgerMenu />
            </button>
            {!isCollapsed && (
              <span className="overflow-hidden text-nowrap">
                User Dashboard
              </span>
            )}
          </div>
          <hr />
          <div className="py-6 space-y-5 w-full">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center p-2 rounded-xl duration-300 text-base h-12 w-full text-nowrap 
              ${
                active === item.key
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-amber-200/70"
              }
            `}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                {item.icons}
                {!isCollapsed && item.title}
              </button>
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="flex gap-3 items-center p-2 rounded-xl duration-300 text-base h-12 w-full text-nowrap hover:bg-amber-200/70"
          >
            <MdLogout />
            {!isCollapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;

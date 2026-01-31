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
import { useNavigate } from "react-router-dom";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
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
      navigate("/");
      sessionStorage.removeItem("GrubGoUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown error");
    }
  };

  return (
    <>
      <div className="p-3 flex-col justify-between h-full bg-white shadow-xl border-r border-gray-200">
        {" "}
        <div>
          <div className="text-xl font-bold flex gap-3 items-center h-14 px-2 border-b border-gray-200">
            {" "}
            <button
              className="p-2 rounded-lg hover:bg-orange-100 transition"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <GiHamburgerMenu className="text-orange-600 text-xl" />
            </button>
            {!isCollapsed && (
              <span className="overflow-hidden text-nowrap text-gray-800 tracking-wide">
                User Dashboard
              </span>
            )}
          </div>
          <div className="py-6 space-y-3 w-full">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center px-4 py-3 rounded-xl duration-300 text-sm font-semibold h-12 w-full text-nowrap transition-all
              ${
                active === item.key
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                  : " text-gray-600 hover:bg-orange-100 hover:text-orange-600"
              }
            `}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                <span className="text-lg">{item.icons}</span>
                {!isCollapsed && item.title}
              </button>
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="flex gap-3 items-center px-4 py-3 rounded-xl duration-300 text-sm font-semibold h-12 w-full text-nowrap text-red-500 hover:bg-red-100 transition"
          >
            <MdLogout className="text-lg" />
            {!isCollapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;

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

const ResturantSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();

  const menuItems = [
    { key: "overview", title: "Resturant Overview", icons: <TbChartTreemap /> },
    { key: "profile", title: "Restaurant Profile", icons: <CgProfile /> },
    { key: "orders", title: "Restaurant Orders", icons: <FaCartShopping /> },
    { key: "transactions", title: "Restaurant transactions", icons: <GrTransaction /> },
    { key: "helpdesk", title: "Support", icons: <RiCustomerService2Fill /> },
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
    <div className="h-full bg-white flex flex-col justify-between shadow-xl ">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 px-4 h-16 border-b border-gray-200">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-md hover:bg-orange-100 transition"
          >
            <GiHamburgerMenu className="text-orange-600 text-xl" />
          </button>

          {!isCollapsed && (
            <span className="font-bold text-lg text-gray-800 tracking-wide">
              Restaurant Manager Dashboard
            </span>
          )}
        </div>

        {/* Menu */}
        <div className="mt-4 space-y-1 px-2 pb-10">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg w-full transition-all
              ${
                active === item.key
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              <span className="text-lg">{item.icons}</span>
              {!isCollapsed && (
                <span className="font-medium ">{item.title}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="p-3">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-3 w-full rounded-lg text-red-500 hover:bg-red-100 transition"
        >
          <MdLogout className="text-xl" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default ResturantSideBar;

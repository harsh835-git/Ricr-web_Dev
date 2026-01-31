import React, { useEffect, useState } from "react";

import ResturantSidebar from "../../components/ResturantManagerDashboard/ResturantSidebar";
import ResturantProfile from "../../components/ResturantManagerDashboard/ResturantProfile";
import ResturantOrders from "../../components/ResturantManagerDashboard/ResturantOrders";
import ResturantTransaction from "../../components/ResturantManagerDashboard/ResturantTransaction";
import ResturantOverview from "../../components/ResturantManagerDashboard/ResturantOverview";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const RestaurantDashboard = () => {
  const { isLogin, role } = useAuth();
  const [active, setActive] = useState("overview");
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  // Role protection
  if (role !== "manager") {
    return (
      <div className="p-3">
        <div className="border rounded shadow p-6 max-w-xl mx-auto text-center bg-red-50">
          <div className="text-5xl text-red-600 mb-3">⛔</div>
          <div className="text-xl font-semibold">
            You are not logged in as Restaurant Manager.
          </div>
          <p className="text-gray-600 mt-2">
            Please login with your restaurant account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[91vh] flex">
      
      {/* Sidebar */}
      <div
        className={`bg-(--color-background) duration-300 ${
          isCollapsed ? "w-2/60" : "w-12/60"
        }`}
      >
        <ResturantSidebar
          active={active}
          setActive={setActive}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* Main Content */}
      <div className={`duration-300 ${isCollapsed ? "w-58/60" : "w-48/60"}`}>
        {active === "overview" && <ResturantOverview />}
        {active === "profile" && <ResturantProfile />}
        {active === "orders" && <ResturantOrders />}
        {active === "transactions" && <ResturantTransaction />}
      </div>
    </div>
  );
};

export default RestaurantDashboard;

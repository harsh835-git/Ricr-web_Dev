import React, { useState } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import UserOverview from "../../components/userDashboard/UserOverview";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="w-full h-[91vh] flex">
        <div className="bg-(--color-background) w-1/7 ">
          <UserSideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-red-800 w-6/7">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransaction />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

import React from "react";
import { GrTransaction } from "react-icons/gr";
import { TbChartTreemap } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";


const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold flex gap-4 align-text-bottom">User Dashboard <GiHamburgerMenu/></div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className={`flex gap-3 items-center p-2 rounded-xl
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-amber-200/70"
              }
            `}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap />
            Overview
          </button>
          <button
            className={`flex gap-3 items-center  p-2 rounded-xl
              ${
                active === "profile"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-amber-200/70"
              }
            `}
            onClick={() => setActive("profile")}
          >
            {" "}
            <CgProfile /> Profile
          </button>
          <button
            className={`flex gap-3 items-center  p-2 rounded-xl
              ${
                active === "orders"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-amber-200/70"
              }
            `}
            onClick={() => setActive("orders")}
          >
            <FaCartShopping /> Orders
          </button>
          <button
            className={`flex gap-3 items-center  p-2 rounded-xl
              ${
                active === "transactions"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-amber-200/70"
              }
            `}
            onClick={() => setActive("transactions")}
          >
            {" "}
            <GrTransaction />
            Transactions
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-amber-200/70 p-2 rounded-xl
              ${
                active === "helpdesk"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-amber-200"
              }
            `}
            onClick={() => setActive("helpdesk")}
          >
            <RiCustomerService2Fill /> Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;

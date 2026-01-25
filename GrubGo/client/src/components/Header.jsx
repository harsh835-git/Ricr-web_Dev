import React from "react";
import horizontalLogo from "../assets/horizontalLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Header = () => {
  const { user, isLogin, role } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    switch (role) {
      case "manager": {
        navigate("/resturant-dashboard");
        break;
      }
      case "partner": {
        navigate("/rider-dashboard");
        break;
      }
      case "customer": {
        navigate("/user-dashboard");
        break;
      }
      case "admin": {
        navigate("/admin-dashboard");
        break;
      }
      default:
        break;
    }
  };

  return (
    <>
      <div className="bg-linear-to-r from-orange-500 to-red-500 px-4 py-2 flex justify-between items-center sticky top-0">
        <Link to={"/"}>
          <img
            src={horizontalLogo}
            alt=""
            className="h-12 rounded-3xl shadow"
          />
        </Link>
        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none text-white  hover:text-(--color-accent) font-serif"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--color-accent) font-serif"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--color-accent) font-serif"
          >
            Contact
          </Link>
        </div>
        <div>
          {isLogin ? (
            <div
              className="font-bold font-serif text-white text-xl cursor-pointer"
              onClick={handleNavigate}
            >
              Hi, {user.fullName}!
            </div>
          ) : (
            <div>
              {" "}
              <button
                onClick={() => navigate("/Login")}
                className="bg-(--color-secondary) py-2 px-4 m-2 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded font-serif"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/Register")}
                className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded font-serif"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

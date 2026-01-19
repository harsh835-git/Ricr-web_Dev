import React from "react";
import horizontalLogo from "../assets/horizontalLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Header = () => {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center sticky top-0">
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
            <span>{user.fullName}</span>
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

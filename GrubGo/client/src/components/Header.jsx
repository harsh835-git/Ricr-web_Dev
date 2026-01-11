import React from "react";
import horizontalLogo from "../assets/horizontalLogo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center">
        <Link to={"/"}>
          <img src={horizontalLogo} alt="" className="h-12 invert-100" />
        </Link>
        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none text-white  hover:text-(--color-accent)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Contact
          </Link>
        </div>
        <div>
          <button
            onClick={() => navigate("/Login")}
            className="bg-(--color-secondary) py-2 px-4 m-2 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
          >
            Login
          </button>
          <button
            onClick={() => navigate("/Register")}
            className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

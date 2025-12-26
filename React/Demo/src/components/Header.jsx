import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center text-light mb-2 bg-secondary p-1 position-sticky top-0">
        <h3>Website By React</h3>
        <div className="p-2 d-flex gap-4">
          <Link to ={"/"} className="text-decoration-none text-light"> Home</Link>
          <Link to ={"/about"} className="text-decoration-none text-light"> About</Link>
          <Link to ={"/product"} className="text-decoration-none text-light"> Product</Link>
          <Link to ={"/contact"} className="text-decoration-none text-light"> Contact</Link>
        </div>
      </div>
    </>
  );
};
export default Header;

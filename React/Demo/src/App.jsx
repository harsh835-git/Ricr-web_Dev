import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
      <div className="bg-black text-light text-capitalize text-center fs-2 fw-bolder p-1 ">
        This Is my first React App
      </div>

      <Footer/>
    </>
  );
}

export default App;

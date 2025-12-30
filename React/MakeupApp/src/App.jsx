import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import makeupbackground from "./assets/makeupbackground.png";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${makeupbackground})` }}
      >
        <div className="absolute inset-0 bg-white opacity-30"></div>

        <div className="relative z-10">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

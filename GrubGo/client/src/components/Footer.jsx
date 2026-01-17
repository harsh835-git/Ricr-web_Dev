import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-orange-500 to-red-500 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold mb-3">🍔 GrubGo</h2>
            <p className="text-sm text-orange-100">
              Fast • Fresh • Delivered at Your Doorstep
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">
                <Link
                  to={"/"}
                  className="text-decoration-none text-white   font-serif"
                >
                  Home
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link
                  to={"/about"}
                  className="text-decoration-none text-white  font-serif"
                >
                  About
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link
                  to={"/contact"}
                  className="text-decoration-none text-white  font-serif"
                >
                  Contact
                </Link>
              </li>
              <li className="font-serif hover:underline cursor-pointer">Restaurants</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>🍕 Food Delivery</li>
              <li>📦 Live Order Tracking</li>
              <li>🔒 Secure Payments</li>
              <li>⚡ Fast Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 India</li>
              <li>📧 support@grubgo.com</li>
              <li>📞 +91 8358851466</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-orange-100 gap-4">
          <p>© {new Date().getFullYear()} GrubGo. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">Terms</span>
            <span className="cursor-pointer hover:text-white">Refunds</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

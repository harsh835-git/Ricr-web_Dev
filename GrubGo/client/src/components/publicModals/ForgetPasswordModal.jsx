import React, { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";
import { FaEnvelope, FaKey, FaLock } from "react-icons/fa";
import api from "../../config/Api";
import toast from "react-hot-toast";

const ForgetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    cfNewPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.cfNewPassword) {
      toast.error("New Password and Confirm Password Shoulb be same");
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      let res;
      if (isOtpSent) {
        if (isOtpVerified) {
          if (formData.newPassword !== formData.cfNewPassword) {
            toast.error("Passwords do not match");
            setLoading(false);
            return;
          }
          toast.success("Password Updated Successfully");
          onClose();
        } else {
          toast.success("OTP Verified");
          setIsOtpVerified(true);
        }
      } else {
        res = await api.post("/auth/genOtp", formData);
        toast.success(res.data.message);
        setIsOtpSent(true);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-orange-500 to-red-500 px-6 py-4 flex justify-between items-center text-white">
          <h2 className="text-lg font-bold">🔐 Reset Password</h2>
          <button onClick={onClose} className="text-xl hover:scale-110">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <div className="flex items-center border rounded-xl px-3 mt-1">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isOtpSent}
                placeholder="Enter registered email"
                className="w-full px-3 py-3 focus:outline-none disabled:bg-gray-300"
              />
            </div>
          </div>

          {/* OTP */}
          {isOtpSent && (
            <div>
              <label className="text-sm font-semibold text-gray-700">OTP</label>
              <div className="flex items-center border rounded-xl px-3 mt-1">
                <FaKey className="text-gray-400" />
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  disabled={isOtpVerified}
                  placeholder="Enter OTP"
                  className="w-full px-3 py-3 focus:outline-none disabled:bg-gray-300"
                />
              </div>
            </div>
          )}

          {/* New Password */}
          {isOtpSent && isOtpVerified && (
            <>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  New Password
                </label>
                <div className="flex items-center border rounded-xl px-3 mt-1">
                  <FaLock className="text-gray-400" />
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    placeholder="New password"
                    className="w-full px-3 py-3 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <div className="flex items-center border rounded-xl px-3 mt-1">
                  <FaLock className="text-gray-400" />
                  <input
                    type="password"
                    name="cfNewPassword"
                    value={formData.cfNewPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                    className="w-full px-3 py-3 focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 flex justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">
                  <BsArrowClockwise />
                </span>{" "}
                Processing...
              </>
            ) : isOtpSent ? (
              isOtpVerified ? (
                "Update Password"
              ) : (
                "Verify OTP"
              )
            ) : (
              "Send OTP"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;

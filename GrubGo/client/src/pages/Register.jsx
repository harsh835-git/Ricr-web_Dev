import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    passWord: "",
    confirmPassWord: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      passWord: "",
      confirmPassWord: "",
    });
    setValidationError({});
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) Error.fullName = "Enter full name";
    if (!/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(formData.email))
      Error.email = "Invalid email address";
    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber))
      Error.mobileNumber = "Invalid mobile number";
    if (formData.passWord.length < 6)
      Error.passWord = "Minimum 6 characters";
    if (formData.passWord !== formData.confirmPassWord)
      Error.confirmPassWord = "Passwords do not match";

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return toast.error("Fix the errors");

    setIsLoading(true);
    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message || "Welcome to GrubGo 🍔");
      handleClearForm();
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-6">
          <h1 className="text-3xl font-extrabold">🍔 GrubGo</h1>
          <p className="text-sm mt-1">Fast food, faster delivery</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} onReset={handleClearForm} className="p-6 space-y-4">

          <InputField
            emoji="👤"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={validationError.fullName}
          />

          <InputField
            emoji="📧"
            placeholder="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={validationError.email}
          />

          <InputField
            emoji="📱"
            placeholder="Mobile Number"
            name="mobileNumber"
            maxLength="10"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={validationError.mobileNumber}
          />

          <InputField
            emoji="🔒"
            placeholder="Password"
            name="passWord"
            type="password"
            value={formData.passWord}
            onChange={handleChange}
            error={validationError.passWord}
          />

          <InputField
            emoji="🔒"
            placeholder="Confirm Password"
            name="confirmPassWord"
            type="password"
            value={formData.confirmPassWord}
            onChange={handleChange}
            error={validationError.confirmPassWord}
          />

          {/* Buttons */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg hover:scale-105 transition"
          >
            {isLoading ? "Creating Account..." : "Start Ordering 🍕"}
          </button>

          <button
            type="reset"
            className="w-full py-2 text-sm text-gray-500 hover:text-gray-700"
          >
            Clear Form
          </button>
        </form>
      </div>
    </div>
  );
};

/* Reusable Food Style Input */
const InputField = ({ emoji, error, ...props }) => (
  <div>
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border
      ${error ? "border-red-400" : "border-gray-300 focus-within:border-orange-500"}
      bg-gray-50`}
    >
      <span className="text-xl">{emoji}</span>
      <input {...props} className="w-full bg-transparent outline-none" />
    </div>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default Registration;

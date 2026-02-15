import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassWord: "",
    role: "",
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
      password: "",
      confirmPassWord: "",
      role: "",
    });
    setValidationError({});
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) Error.fullName = "Enter full name";
    if (
      !/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email,
      )
    )
      Error.email = "Invalid email address";
    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber))
      Error.mobileNumber = "Invalid mobile number";
    if (formData.password.length < 6) Error.password = "Minimum 6 characters";
    if (!formData.confirmPassWord)
      Error.confirmPassWord = "Confirm your password";
    else if (formData.password !== formData.confirmPassWord)
      Error.confirmPassWord = "Passwords do not match";

    if (!formData.role) {
      Error.role = "Please choose any one";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = async (e) => {
    console.log("Sending:", formData);

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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-100 to-red-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden m-6">
        {/* Header */}
        <div className="bg-linear-to-r from-orange-500 to-red-500 text-white text-center py-6">
          <h1 className="text-3xl font-extrabold">🍔 GrubGo</h1>
          <p className="text-sm mt-1">Create your account</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          onReset={handleClearForm}
          className="p-6 space-y-5"
        >
          {/* Role */}
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">I am</p>

            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  id="manager"
                  checked={formData.role === "manager"}
                  value={"manager"}
                  onChange={handleChange}
                  className="accent-orange-500"
                />
                Restaurant Manager
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  id="partner"
                  checked={formData.role === "partner"}
                  value={"partner"}
                  onChange={handleChange}
                  className="accent-orange-500"
                />
                Delivery Partner
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  id="customer"
                  checked={formData.role === "customer"}
                  value={"customer"}
                  onChange={handleChange}
                  className="accent-orange-500"
                />
                Customer
              </label>
            </div>

            {validationError.role && (
              <span className="text-xs text-red-500">
                {validationError.role}
              </span>
            )}
          </div>

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
            placeholder="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={validationError.password}
          />

          <InputField
            emoji="🔒"
            placeholder="Confirm password"
            name="confirmPassWord"
            type="password"
            value={formData.confirmPassWord}
            onChange={handleChange}
            error={validationError.confirmPassWord}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-linear-to-r from-orange-500 to-red-500 text-white font-bold text-lg hover:scale-105 transition"
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

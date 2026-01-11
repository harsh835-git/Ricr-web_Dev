import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api"

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

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Clear Form
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

  // Validation
  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be at least 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      Error.fullName = "Only letters and spaces allowed";
    }

    if (
      !/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Enter a valid email address";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only valid Indian mobile numbers allowed";
    }

    if (formData.passWord.length < 6) {
      Error.passWord = "Password must be at least 6 characters";
    }

    if (formData.passWord !== formData.confirmPassWord) {
      Error.confirmPassWord = "Passwords do not match";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  // Submit Form
   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      toast.error("Please fix the errors");
      setIsLoading(false);
      return;
    }

    try {
     const res = await api.post("/auth/register",formData)
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Registration
          </h1>
          <p className="text-lg text-gray-600">
            You are 1 step away from GrubGo
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <form
            onSubmit={handleSubmit}
            onReset={handleClearForm}
            className="p-8"
          >
         

            <div className=" space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 rounded-lg"
                />
                {validationError.fullName && (
                  <span className="text-xs text-red-500">
                    {validationError.fullName}
                  </span>
                )}
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-lg"
              />

              {/* Mobile */}
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                maxLength="10"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-lg"
              />

              {/* Password */}
              <div>
                <input
                  type="password"
                  name="passWord"
                  placeholder="Password"
                  value={formData.passWord}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 rounded-lg"
                />
                {validationError.passWord && (
                  <span className="text-xs text-red-500">
                    {validationError.passWord}
                  </span>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <input
                  type="password"
                  name="confirmPassWord"
                  placeholder="Confirm Password"
                  value={formData.confirmPassWord}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 rounded-lg"
                />
                {validationError.confirmPassWord && (
                  <span className="text-xs text-red-500">
                    {validationError.confirmPassWord}
                  </span>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-8 border-t-2 mt-8">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 rounded-lg hover:from-indigo-700 hover:to-indigo-800"
              >
                {isLoading ? "Submitting..." : "Submit Registration"}
              </button>

              <button
                type="reset"
                className="flex-1 bg-gray-300 font-bold py-4 rounded-lg hover:bg-gray-400"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

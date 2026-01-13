import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    passWord: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let Error = {};

    if (
      !/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Enter a valid email address";
    }

    if (formData.passWord.length < 6) {
      Error.passWord = "Password must be at least 6 characters";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleClearForm = () => {
    setFormData({ email: "", passWord: "" });
  };

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors");
      return;
    }

    setIsLoading(true);

    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message || "Login successful");
      handleClearForm();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-3 border-2 rounded-lg"
          />
          {validationError.email && (
            <p className="text-xs text-red-500">{validationError.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            type="password"
            name="passWord"
            placeholder="Password"
            value={formData.passWord}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-3 border-2 rounded-lg"
          />
          {validationError.passWord && (
            <p className="text-xs text-red-500">{validationError.passWord}</p>
          )}
        </div>

        <p className="text-indigo-600 text-sm mb-4">
          <Link to="/register" className="font-bold hover:underline">
            Didn't Registered?
          </Link>
        </p>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

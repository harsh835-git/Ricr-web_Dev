import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    passWord: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let Error = {};

    if (
      !/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(formData.email)
    ) {
      Error.email = "Enter a valid email address";
    }

    if (formData.passWord.length < 6) {
      Error.passWord = "Password must be at least 6 characters";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return toast.error("Fix the errors");

    setIsLoading(true);
    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message || "Welcome back 🍔");
      navigate("/user-dashboard")
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
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
          <p className="text-sm mt-1">Welcome back! Login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          <InputField
            emoji="📧"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={validationError.email}
            disabled={isLoading}
          />

          <InputField
            emoji="🔒"
            type="password"
            placeholder="Password"
            name="passWord"
            value={formData.passWord}
            onChange={handleChange}
            error={validationError.passWord}
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg hover:scale-105 transition"
          >
            {isLoading ? "Logging in..." : "Login & Order 🍕"}
          </button>

          <p className="text-center text-sm text-gray-600">
            New to GrubGo?{" "}
            <Link
              to="/register"
              className="text-orange-600 font-bold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

/* Reusable Input Component */
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

export default Login;

import React, { useState } from "react";
import api from "../../../config/Api";
import toast from "react-hot-toast";

const ResetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    cfNewPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { oldPassword, newPassword, cfNewPassword } = formData;

    // Frontend validation
    if (!oldPassword || !newPassword || !cfNewPassword) {
      return toast.error("All fields are required");
    }

    if (newPassword !== cfNewPassword) {
      return toast.error("New password and confirm password must match");
    }

    try {
      setLoading(true);

    
      const res = await api.patch("/Restaurant/resetPassword", {
        oldPassword,
        newPassword,
      });

      toast.success(res.data.message || "Password updated successfully");
      onClose();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Password update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-[#fffdf9] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">

        
        <div className="flex justify-between items-center px-6 py-4 border-b bg-orange-50">
          <h2 className="text-xl font-bold text-orange-600">🔒 Reset Password</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Old Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Old Password
            </label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleInputChange}
              placeholder="Enter old password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="Enter new password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              name="cfNewPassword"
              value={formData.cfNewPassword}
              onChange={handleInputChange}
              placeholder="Confirm new password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 bg-gray-200 py-3 rounded-xl hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⟳</span> Updating...
                </>
              ) : (
                "Update Password"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ResetPasswordModal;

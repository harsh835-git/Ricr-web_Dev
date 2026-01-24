import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";

const EditProfileModal = ({ onclose }) => {
  const { user, setUser } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.put("/user/update", formData);

      sessionStorage.setItem("GrubGoUser", JSON.stringify(res.data.data));
      setUser(res.data.data);

      
    } catch (error) {
      console.log("Update failed:", error);
    } finally {
      onclose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-lg shadow-xl rounded-2xl max-h-[85vh] mx-auto overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-orange-500 to-red-500">
          <h2 className="text-lg font-semibold text-white">Edit Profile</h2>
          <button
            onClick={onclose}
            className="text-white hover:text-gray-200 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onclose}
              className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 text-sm rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;

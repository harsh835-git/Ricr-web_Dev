import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditManagerModal from "./modals/EditManagerModal";
import api from "../../config/Api";
import toast from "react-hot-toast";
import ResturantImage from "../../assets/image.png";
import { FaCamera } from "react-icons/fa";
import ResetPasswordModal from "./modals/ResetPasswordModal";

const ResturantProfile = () => {
  const { Restaurant, setRestaurant } = useAuth();

  const [isEditManagerModalOpen, setIsEditManagerModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [preview, setPreview] = useState("");
  const [photo, setPhoto] = useState("");

  const changePhoto = async (photo) => {
    const form_Data = new FormData();
    form_Data.append("image", photo);
    form_Data.append("imageURL", preview);

    try {
      const res = await api.patch("/Restaurant/changePhoto", form_Data);
      toast.success(res.data.message);
      setUser(res.data.data);
      sessionStorage.setItem("GrubGoUser", JSON.stringify(res.data.data));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const newPhotoURL = URL.createObjectURL(file);

    setPreview(newPhotoURL);
    setTimeout(() => {
      setPhoto(file);
      changePhoto(file);
    }, 2000);
  };

  return (
    <>
      <div className="min-h-full bg-gradient-to-br from-orange-100 via-orange-50 to-white p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-orange-500 to-red-500"></div>

          <div className="p-8 relative">
            {/* Logo / Image */}
            <div className="absolute -top-16 left-8">
              <div className="w-36 h-36 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-white">
                <img
                  src={preview || Restaurant?.photo?.url || ResturantImage}
                  alt="restaurant"
                  className="w-full h-full object-cover"
                />
              </div>

              <label
                htmlFor="imageUpload"
                className="absolute bottom-2 right-2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full cursor-pointer shadow"
              >
                <FaCamera />
              </label>

              <input
                type="file"
                id="imageUpload"
                className="hidden"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </div>

            {/* Info */}
            <div className="ml-48 flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {Restaurant?.fullName || "Restaurant Name"}
                </h1>
                <p className="text-gray-500 mt-1">
                  {Restaurant?.email || "restaurant@email.com"}
                </p>
                <p className="text-gray-500">
                  {Restaurant?.mobileNumber || "XXXXXXXXXX"}
                </p>
                <p className="text-sm mt-2 px-3 py-1 inline-block bg-green-100 text-green-700 rounded-full">
                  🟢 Active Restaurant
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setIsEditManagerModalOpen(true)}
                  className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow"
                >
                  Edit Profile
                </button>

                <button
                  onClick={() => setIsResetPasswordModalOpen(true)}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold shadow"
                >
                  Reset Password
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Restaurant Address</p>
                <p className="font-semibold text-gray-800">
                  {Restaurant?.address || "Not Added"}
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">City</p>
                <p className="font-semibold text-gray-800">
                  {Restaurant?.city || "N/A"}
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">PIN Code</p>
                <p className="font-semibold text-gray-800">
                  {Restaurant?.pin || "N/A"}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {isEditManagerModalOpen && (
        <EditManagerModal onClose={() => setIsEditManagerModalOpen(false)} />
      )}

      {isResetPasswordModalOpen && (
        <ResetPasswordModal onClose={() => setIsResetPasswordModalOpen(false)} />
      )}
    </>
  );
};

export default ResturantProfile;

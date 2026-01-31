import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import api from "../../config/Api";
import toast from "react-hot-toast";
import UserImage from "../../assets/image.png";
import { FaCamera } from "react-icons/fa";
import ResetPasswordModal from "./modals/ResetPasswordModal";

const UserProfile = () => {
  const { user, setUser } = useAuth();
  console.log(user);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [preview, setPreview] = useState("");
  const [photo, setPhoto] = useState("");

  const changePhoto = async (photo) => {
    const form_Data = new FormData();
    form_Data.append("image", photo);
    form_Data.append("imageURL", preview);

    try {
      const res = await api.patch("/user/changePhoto", form_Data);
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
    }, 5000);
  };

  return (
    <>
      <div className="h-full bg-linear-to-l from-orange-200 to-orange-50 p-8 ">
        <div className="max-w-5xl  mx-auto bg-white rounded-2xl shadow-xl p-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b pb-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-orange-300 shadow-md ">
                <img
                  src={preview || user?.photo?.url || UserImage}
                  alt="profile"
                  className="w-full h-full object-cover "
                />
              </div>

              <label
                htmlFor="imageUpload"
                className="absolute bottom-2 right-2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg"
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

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800">
                {user.fullName || "User Name"}
              </h1>
              <p className="text-gray-600 mt-2">
                {user.email || "user@email.com"}
              </p>
              <p className="text-gray-600">
                {user.mobileNumber || "XXXXXXXXXX"}
              </p>

              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <button
                  onClick={() => setIsEditProfileModalOpen(true)}
                  className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow"
                >
                  Edit Profile
                </button>

                <button
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold shadow"
                  onClick={() => setIsResetPasswordModalOpen(true)}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>

          {/* Optional Info Cards (future ready) */}
        </div>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}

      {isResetPasswordModalOpen && (
        <ResetPasswordModal
          onClose={() => setIsResetPasswordModalOpen(false)}
        />
      )}
    </>
  );
};

export default UserProfile;

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
     <p className="text-center font-bold text-3xl font-serif text-gray-800 p-1.5">My Profile</p>


     <hr  className="m-4 text-5xl"/>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 py-5 border-b bg-white ">

        {/* Left Info */}
       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <p className="text-xs uppercase text-gray-500 tracking-wide font-bold">
              Full Name
            </p>
            <p className="font-medium text-gray-900 ">
              {user?.fullName || "—"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 tracking-wide font-bold">
              Email
            </p>
            <p className="font-medium text-gray-900">
              {user?.email || "—"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 tracking-wide font-bold">
              Phone
            </p>
            <p className="font-medium text-gray-900">
              {user?.mobileNumber || "—"}
            </p>
          </div>
        </div>

        {/* Action */}
        <button
          onClick={() => setIsEditProfileModalOpen(true)}
          className="px-6 py-2 rounded-xl font-semibold bg-linear-to-r from-orange-500 to-red-500 text-white hover:scale-105 transition"
        >
          Edit Profile
        </button>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onclose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user } = useAuth();
  return (
    <>
      <div className="flex gap-10">
        <div>
          <span>
            Name: <span>{user.fullName}</span>
          </span>
        </div>
        <div>
          <span>
            Email: <span>{user.email}</span>
          </span>
        </div>
        <div>
          <span>
            Phone: <span>{user.mobileNumber}</span>
          </span>
        </div>
        <button
          className="px-5 py-2 rounded-2xl font-bold shadow border-amber-900 bg-amber-500 m-3 hover:scale-105 hover:bg-amber-300"
          onClick={() => setIsEditProfileModalOpen(true)}
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

import React from "react";

const EditProfileModal = ({ onclose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        <div
        className="bg-white w-5xl max-h-[85vh] mx-auto overflow-y-auto">EditProfileModal
        <button
          className="rounded m-3 py-1 px-3 font-semibold font-serif bg-gray-300 shadow-2xl hover:scale-105 hover:bg-gray-400 "
          onClick={() => onclose()}
        >
          Close
        </button>
        
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;

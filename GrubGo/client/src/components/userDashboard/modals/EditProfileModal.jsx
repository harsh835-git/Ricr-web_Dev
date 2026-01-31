import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser, setIsLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    gender: user?.gender || "",
    dob: user?.dob || "",
    address: user?.address || "",
    city: user?.city || "",
    pin: user?.pin || "",
    documents: {
      uidai: user?.documents?.uidai || "",
      pan: user?.documents?.pan || "",
    },
    paymentDetails: {
      upi: user?.paymentDetails?.upi || "",
      account_number: user?.paymentDetails?.account_number || "",
      ifs_Code: user?.paymentDetails?.ifs_Code || "",
    },
    geoLocation: {
      lat: user?.geoLocation?.lat || "N/A",
      lon: user?.geoLocation?.lon || "N/A",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: { ...prev[parent], [field]: value },
    }));
  };

  const fetchLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((pos) => {
      setFormData((prev) => ({
        ...prev,
        geoLocation: {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        },
      }));
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.put("/user/update", formData);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      setMessage({ type: "success", text: "Profile updated successfully!" });
      setTimeout(() => onClose(), 1200);
    } catch {
      setMessage({ type: "error", text: "Update failed" });
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 ">
      <div className="bg-[#fffdf9] w-full max-w-4xl rounded-3xl shadow-2xl max-h-[95vh] overflow-y-auto mb-10 mt-30">

        {/* Header */}
        <div className="sticky top-0 bg-white p-5 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-orange-600">
            🍔 Edit Profile
          </h2>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-orange-100">
            ✕
          </button>
        </div>

        {message.text && (
          <div
            className={`m-6 p-3 rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-8">

          {/* Personal Info */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-gray-700 mb-4">👤 Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">Full Name</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="fullName" value={formData.fullName} onChange={handleInputChange} />
              </div>

              <div>
                <label className="label">Email</label>
                <br />
                
                <input className="input focus:outline-none border-none bg-gray-100 p-1" value={formData.email} disabled />
              </div>

              <div>
                <label className="label">Mobile Number</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
              </div>

              <div>
                <label className="label ">Gender</label>
                <br />
                <select className="input focus:outline-none border-none p-1" name="gender" value={formData.gender} onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="label">Date of Birth</label>
                <br />
                <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="input p-1 focus:outline-none border-none" />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-gray-700 mb-4">📍 Delivery Address</h3>

            <label className="label">Full Address</label>
            <br />
            <input className="input mb-3 focus:outline-none border-none p-1" name="address" value={formData.address} onChange={handleInputChange} />

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="label">City</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="city" value={formData.city} onChange={handleInputChange} />
              </div>

              <div>
                <label className="label">PIN Code</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="pin" value={formData.pin} onChange={handleInputChange} />
              </div>

              <div className="flex items-end">
                <button onClick={fetchLocation} type="button" className="w-full bg-orange-500 text-white py-2 rounded-lg">
                  Use Live Location
                </button>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-gray-700 mb-4">📄 Documents</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">Aadhaar Number</label>
                <br />
                <input className="input p-1 focus:outline-none border-none" value={formData.documents.uidai} onChange={(e)=>handleNestedChange("documents","uidai",e.target.value)} />
              </div>

              <div>
                <label className="label">PAN Number</label>
                <br />
                <input className="input p-1 focus:outline-none border-none" value={formData.documents.pan} onChange={(e)=>handleNestedChange("documents","pan",e.target.value)} />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-gray-700 mb-4 ">💳 Payment Details</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="label">UPI ID</label>
                <br />
                <input className="input focus:outline-none border-none p-1" value={formData.paymentDetails.upi} onChange={(e)=>handleNestedChange("paymentDetails","upi",e.target.value)} />
              </div>

              <div>
                <label className="label">Account Number</label>
                <br />
                <input className="input focus:outline-none border-none p-1" value={formData.paymentDetails.account_number} onChange={(e)=>handleNestedChange("paymentDetails","account_number",e.target.value)} />
              </div>

              <div>
                <label className="label">IFSC Code</label>
                <br />
                <input className="input focus:outline-none border-none p-1" value={formData.paymentDetails.ifs_Code} onChange={(e)=>handleNestedChange("paymentDetails","ifs_Code",e.target.value)} />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button type="button" onClick={onClose} className="flex-1 bg-gray-200 py-3 rounded-xl">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="flex-1 bg-orange-500 text-white py-3 rounded-xl">
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;

import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";
import toast from "react-hot-toast";

const EditManagerModal = ({ onClose }) => {
  const { user, setUser, setIsLogin } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    gender: user?.gender || "",
    dob: user?.dob || "",
    cuisine: user?.cuisine || "",
    restaurantName: user?.restaurantName || "",

    address: user?.address || "",
    city: user?.city || "",
    pin: user?.pin || "",

    documents: {
      uidai: user?.documents?.uidai || "",
      pan: user?.documents?.pan || "",
      fssai: user?.documents?.fssai || "",
      gst: user?.documents?.gst || "",
      rc: user?.documents?.rc || "",
      dl: user?.documents?.dl || "",
    },

    paymentDetails: {
      upi: user?.paymentDetails?.upi || "",
      account_number: user?.paymentDetails?.account_number || "",
      ifs_Code: user?.paymentDetails?.ifs_Code || "",
    },

    geoLocation: {
      lat: user?.geoLocation?.lat || "",
      lon: user?.geoLocation?.lon || "",
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

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      return;
    }
    toast.loading("Fetching location...", { id: "loc" });

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setFormData((prev) => ({
          ...prev,
          geoLocation: {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          },
        }));
        toast.success("Location updated", { id: "loc" });
      },
      () => toast.error("Permission denied", { id: "loc" })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Updating profile...");

    try {
      const res = await api.put("/Restaurant/update", formData);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      toast.success("Profile updated", { id: toastId });
      setTimeout(() => onClose(), 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed", {
        id: toastId,
      });
    }
    setLoading(false);
  };

  const inputStyle =
    "w-full px-3 py-2 mt-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400";

  const labelStyle = "text-sm font-semibold text-gray-700";

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur flex justify-center items-start z-50 pt-24 p-4">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">

        {/* THEME HEADER */}
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md sticky top-0 z-10">
          <h2 className="text-lg font-bold">Edit Restaurant Profile</h2>
          <button onClick={onClose} className="text-xl hover:scale-110">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-10">

          {/* Owner & Restaurant */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Owner & Restaurant</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyle}>Owner Name</label>
                <input className={inputStyle} name="fullName" value={formData.fullName} onChange={handleInputChange}/>
              </div>

              <div>
                <label className={labelStyle}>Restaurant Name</label>
                <input className={inputStyle} name="restaurantName" value={formData.restaurantName} onChange={handleInputChange}/>
              </div>

              <div>
                <label className={labelStyle}>Mobile Number</label>
                <input className={inputStyle} name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange}/>
              </div>

              <div>
                <label className={labelStyle}>Cuisine Type</label>
                <input className={inputStyle} name="cuisine" value={formData.cuisine} onChange={handleInputChange}/>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Address</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className={labelStyle}>Address</label>
                <input className={inputStyle} name="address" value={formData.address} onChange={handleInputChange}/>
              </div>
              <div>
                <label className={labelStyle}>City</label>
                <input className={inputStyle} name="city" value={formData.city} onChange={handleInputChange}/>
              </div>
              <div>
                <label className={labelStyle}>PIN Code</label>
                <input className={inputStyle} name="pin" value={formData.pin} onChange={handleInputChange}/>
              </div>
            </div>

            <button type="button" onClick={fetchLocation} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg">
              Use Current Location
            </button>

            <p className="mt-2 text-sm text-gray-600">
              Latitude: {formData.geoLocation.lat} | Longitude: {formData.geoLocation.lon}
            </p>
          </div>

          {/* Documents */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Business Documents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {["uidai","pan","fssai","gst","rc","dl"].map((doc) => (
                <div key={doc}>
                  <label className={labelStyle}>{doc.toUpperCase()}</label>
                  <input className={inputStyle} value={formData.documents[doc]} onChange={(e)=>handleNestedChange("documents",doc,e.target.value)}/>
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Payment Details</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {["upi","account_number","ifs_Code"].map((p) => (
                <div key={p}>
                  <label className={labelStyle}>{p.replace("_"," ").toUpperCase()}</label>
                  <input className={inputStyle} value={formData.paymentDetails[p]} onChange={(e)=>handleNestedChange("paymentDetails",p,e.target.value)}/>
                </div>
              ))}
            </div>
          </div>

          <button disabled={loading} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:opacity-90">
            {loading ? "Saving..." : "Update Profile"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditManagerModal;

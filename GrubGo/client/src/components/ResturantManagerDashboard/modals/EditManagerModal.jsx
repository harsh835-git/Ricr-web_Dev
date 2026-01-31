import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";

const EditManagerModal = ({ onClose }) => {
  const { Restaurant, setRestaurant, setIsLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    fullName: Restaurant?.fullName || "",
    email: Restaurant?.email || "",
    mobileNumber: Restaurant?.mobileNumber || "",
    gender: Restaurant?.gender || "",
    dob: Restaurant?.dob || "",
    cuisine: Restaurant?.cuisine || "",

    address: Restaurant?.address || "",
    city: Restaurant?.city || "",
    pin: Restaurant?.pin || "",

    documents: {
      uidai: Restaurant?.documents?.uidai || "",
      pan: Restaurant?.documents?.pan || "",
      fssai: Restaurant?.documents?.fssai || "",
      gst: Restaurant?.documents?.gst || "",
    },

    paymentDetails: {
      upi: Restaurant?.paymentDetails?.upi || "",
      account_number: Restaurant?.paymentDetails?.account_number || "",
      ifs_Code: Restaurant?.paymentDetails?.ifs_Code || "",
    },

    geoLocation: {
      lat: Restaurant?.geoLocation?.lat || "N/A",
      lon: Restaurant?.geoLocation?.lon || "N/A",
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
      const res = await api.put("/Restaurant/update", formData);
      sessionStorage.setItem("GrubGoUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      setMessage({ type: "success", text: "Restaurant profile updated successfully" });
      setTimeout(() => onClose(), 1200);
    } catch {
      setMessage({ type: "error", text: "Update failed" });
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50 p-4 ">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl overflow-y-auto max-h-[95vh] mt-30 mb-10">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <h2 className="text-lg font-bold">🍽 Restaurant Profile</h2>
          <button onClick={onClose} className="bg-white/20 w-8 h-8 rounded-full">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">

          {/* Owner Info */}
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-orange-600 font-semibold mb-4">Owner & Restaurant Info</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label>Owner Name</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="fullName" value={formData.fullName} onChange={handleInputChange}/>
              </div>

              <div>
                <label>Email</label>
                <br />
                <input className="input bg-gray-100 focus:outline-none border-none p-1" value={formData.email} disabled />
              </div>

              <div>
                <label>Mobile Number</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange}/>
              </div>

              <div>
                <label>Gender</label>
                <br />
                <select className="input focus:outline-none border-none p-1" name="gender" value={formData.gender} onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label>Date of Birth</label>
                <br />
                <input type="date" className="input focus:outline-none border-none p-1" name="dob" value={formData.dob} onChange={handleInputChange}/>
              </div>

              <div>
                <label>Cuisine Type</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="cuisine" value={formData.cuisine} onChange={handleInputChange} placeholder="Eg: Indian, Chinese, Italian"/>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-orange-600 font-semibold mb-4">Restaurant Address</h3>
            <div>
              <label>Full Address</label>
              <br />
              <input className="input focus:outline-none border-none p-1" name="address" value={formData.address} onChange={handleInputChange}/>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div>
                <label>City</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="city" value={formData.city} onChange={handleInputChange}/>
              </div>
              <div>
                <label>PIN Code</label>
                <br />
                <input className="input focus:outline-none border-none p-1" name="pin" value={formData.pin} onChange={handleInputChange}/>
              </div>
              <div>
                <label>Live Location</label>
                <br />
                <button type="button" onClick={fetchLocation} className="bg-orange-500 text-white w-full py-2 rounded-lg">
                  Use Current Location
                </button>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-orange-600 font-semibold mb-4">Legal Documents</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div><label>Aadhaar Number</label><br/> <input className="input focus:outline-none border-none p-1" value={formData.documents.uidai} onChange={(e)=>handleNestedChange("documents","uidai",e.target.value)}/></div>
              <div><label>PAN Number</label> <br/><input className="input focus:outline-none border-none p-1" value={formData.documents.pan} onChange={(e)=>handleNestedChange("documents","pan",e.target.value)}/></div>
              <div><label>FSSAI License</label> <br/><input className="input focus:outline-none border-none p-1" value={formData.documents.fssai} onChange={(e)=>handleNestedChange("documents","fssai",e.target.value)}/></div>
              <div><label>GST Number</label> <br/><input className="input focus:outline-none border-none p-1" value={formData.documents.gst} onChange={(e)=>handleNestedChange("documents","gst",e.target.value)}/></div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-orange-600 font-semibold mb-4">Payment Details</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div><label>UPI ID</label><br/><input className="input focus:outline-none border-none p-1" value={formData.paymentDetails.upi} onChange={(e)=>handleNestedChange("paymentDetails","upi",e.target.value)}/></div>
              <div><label>Account Number</label><br/><input className="input focus:outline-none border-none p-1" value={formData.paymentDetails.account_number} onChange={(e)=>handleNestedChange("paymentDetails","account_number",e.target.value)}/></div>
              <div><label>IFSC Code</label><br/><input className="input focus:outline-none border-none p-1" value={formData.paymentDetails.ifs_Code} onChange={(e)=>handleNestedChange("paymentDetails","ifs_Code",e.target.value)}/></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button type="button" onClick={onClose} className="w-1/2 bg-gray-200 py-3 rounded-xl">Cancel</button>
            <button type="submit" disabled={loading} className="w-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl">
              {loading ? "Saving..." : "Update Restaurant"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditManagerModal;

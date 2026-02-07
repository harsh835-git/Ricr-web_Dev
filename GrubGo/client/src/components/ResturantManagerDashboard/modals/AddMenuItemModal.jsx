import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";
import toast from "react-hot-toast";

const AddMenuItemModal = ({ onClose }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    price: "",
    servingSize: "",
    cuisine: "",
    type: "",
    preparationTime: "",
    availability: true,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));

    let temp = fileArray.slice(0, 5).map((img) => URL.createObjectURL(img));
    setImagePreviews(temp);
    setImages(fileArray.slice(0, 5));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Adding menu item...");

    try {
      const form_data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "availability") {
          form_data.append(key, formData[key] ? "available" : "unavailable");
        } else {
          form_data.append(key, formData[key]);
        }
      });
      
      images.forEach((img) => {
        form_data.append("itemImages", img);
      });

      const res = await api.post("/restaurant/addMenuItem", form_data);
      toast.success(res.data.message || "Item added successfully", { id: toastId });
      setTimeout(handleClose, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Check backend route (404)", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ itemName: "", description: "", price: "", servingSize: "", cuisine: "", type: "", preparationTime: "", availability: true });
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setImagePreviews([]);
    setImages([]);
    setErrors({});
    setLoading(false);
    onClose();
  };

  const labelStyle = "block text-sm font-medium text-gray-700 mb-1";
  const inputStyle = "w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none";

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
        <div className="flex justify-between px-6 py-4 border-b border-gray-300 items-center sticky top-0 bg-white z-10">
          <h2 className="text-xl font-semibold text-gray-800">Add Menu Item</h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-red-600 text-2xl">⊗</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Images */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b">Item Image</h3>
            <div className="flex items-center gap-4">
              <label htmlFor="image" className="px-6 py-2 bg-orange-500 text-white rounded-md cursor-pointer hover:bg-orange-600 transition">Add Image</label>
              <input type="file" id="image" onChange={handleImageChange} accept="image/*" className="hidden" multiple />
              <span className="text-xs text-gray-500">(Max 5 images)</span>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {imagePreviews.map((img, idx) => (
                <div key={idx} className="border rounded-md w-24 h-24 overflow-hidden">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Basic Information</h3>
            <div>
              <label className={labelStyle}>Item Name *</label>
              <input type="text" name="itemName" value={formData.itemName} onChange={handleInputChange} className={inputStyle} placeholder="e.g., Butter Chicken" required />
            </div>
            <div>
              <label className={labelStyle}>Description *</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3" className={inputStyle} placeholder="Describe the dish..." required />
            </div>
          </div>

          {/* Detailed Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Price (₹) *</label>
              <input type="number" name="price" value={formData.price} onChange={handleInputChange} className={inputStyle} placeholder="0.00" required />
            </div>
            <div>
              <label className={labelStyle}>Cuisine Type</label>
              <input type="text" name="cuisine" value={formData.cuisine} onChange={handleInputChange} className={inputStyle} placeholder="e.g., Indian, Italian" />
            </div>
            <div>
              <label className={labelStyle}>Food Type</label>
              <select name="type" value={formData.type} onChange={handleInputChange} className={inputStyle}>
                <option value="">Select Type</option>
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
            <div>
              <label className={labelStyle}>Preparation Time (mins)</label>
              <input type="number" name="preparationTime" value={formData.preparationTime} onChange={handleInputChange} className={inputStyle} />
            </div>
          </div>

          {/* Availability Checkbox */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
            <input type="checkbox" name="availability" checked={formData.availability} onChange={handleInputChange} id="avail" className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-400" />
            <label htmlFor="avail" className="text-sm font-semibold text-gray-700 cursor-pointer">Available for customers to order</label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button type="button" onClick={handleClose} className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md">Cancel</button>
            <button type="submit" disabled={loading} className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50">
              {loading ? "Adding..." : "Add Menu Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItemModal;
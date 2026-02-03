import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    city: "",
    message: "",
    gender: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      mobileNumber: "",
      city: "",
      message: "",
      gender: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post("/public/new-contact", contactData);
      toast.success(res.data.message || "We will contact you soon 🍕");
      handleClearForm();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-100 to-red-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-linear-to-r from-orange-500 to-red-500 text-white text-center py-6">
          <h1 className="text-3xl font-extrabold">📞 Contact GrubGo</h1>
          <p className="text-sm mt-1">We’d love to hear from you</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <InputField
            emoji="👤"
            placeholder="Full Name"
            name="fullName"
            value={contactData.fullName}
            onChange={handleChange}
          />

          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              emoji="📧"
              type="email"
              placeholder="Email Address"
              name="email"
              value={contactData.email}
              onChange={handleChange}
            />

            <InputField
              emoji="📱"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={contactData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          <InputField
            emoji="🏙️"
            placeholder="City"
            name="city"
            value={contactData.city}
            onChange={handleChange}
          />

          {/* Gender */}
          <div>
            <p className="font-semibold mb-2">Gender</p>
            <div className="flex gap-6">
              {["male", "female", "other"].map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={contactData.gender === g}
                    onChange={handleChange}
                    className="accent-orange-500"
                  />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <div className="flex items-start gap-3 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50">
              <span className="text-xl mt-1">💬</span>
              <textarea
                name="message"
                placeholder="Your Message"
                value={contactData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent outline-none resize-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleClearForm}
              disabled={isLoading}
              className="w-1/2 py-3 rounded-xl bg-gray-300 font-bold hover:bg-gray-400 transition"
            >
              Clear
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="w-1/2 py-3 rounded-xl bg-linear-to-r from-orange-500 to-red-500 text-white font-bold hover:scale-105 transition"
            >
              {isLoading ? "Sending..." : "Send Message 🚀"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* Reusable Input Component (Same GrubGo Style) */
const InputField = ({ emoji, ...props }) => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50">
    <span className="text-xl">{emoji}</span>
    <input {...props} className="w-full bg-transparent outline-none" />
  </div>
);

export default Contact;

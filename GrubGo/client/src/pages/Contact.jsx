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

  const [isLoading, setIsLoading] = useState(false); // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Clear Form
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

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(contactData);

    try {
      const res = await api.post("/public/new-contact", contactData);
      toast.success(res.data.message); /// || "You will be contacted soon!");
      handleClearForm();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
        >
          <h1 className="text-3xl font-bold text-center font-serif">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 text-center mb-6 font-serif">
            We’d love to hear from you
          </p>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={contactData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 rounded-lg mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={contactData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 rounded-lg mb-4"
          />

          <input
            type="text"
            name="mobileNumber"
            placeholder="Phone Number"
            value={contactData.mobileNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 rounded-lg mb-4"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={contactData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 rounded-lg mb-4"
          />

          {/* Gender */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Gender</p>
            {["male", "female", "other"].map((g) => (
              <label key={g} className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={contactData.gender === g}
                  onChange={handleChange}
                  required
                  className="mr-1"
                />
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={contactData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 rounded-lg mb-6"
            rows="4"
          />

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleClearForm}
              className="w-1/2 bg-gray-500 text-white font-bold py-3 rounded-lg"
            >
              Clear
            </button>

            <button
              type="submit"
              className="w-1/2 bg-indigo-600 text-white font-bold py-3 rounded-lg disabled:opacity-60"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

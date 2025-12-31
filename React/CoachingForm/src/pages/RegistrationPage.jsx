import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const RegistrationPage = () => {
  const [RegistrationData, setRegistrationData] = useState({
    fullName: "",
    gender: "",
    email: "",
    number: "",
    dob: "",
    qualification: "",
    score: "",
    address: "",
    city: "",
    pinCode: "",
    guardianName: "",
    guardianNumber: "",
    coachingInfo: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  

  const handleClearForm = () => {
    setRegistrationData({
      fullName: "",
      gender: "",
      email: "",
      number: "",
      dob: "",
      qualification: "",
      score: "",
      address: "",
      city: "",
      pinCode: "",
      guardianName: "",
      guardianNumber: "",
      coachingInfo: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(RegistrationData);
    setIsLoading(false);
    toast.success("Registration Sucessfull");
    handleClearForm();
  };

  return (
    <>
    <Toaster />
    
      <header className="bg-blue-950 text-white text-4xl text-center py-3">
        <h1>Registration Form</h1>
      </header>

      <main className="mx-auto max-w-5xl border my-20 pb-10">
        <form onSubmit={handleSubmit}>
          <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
            <span className="px-2 text-2xl text-blue-400 bg-white absolute -top-4">
              Personal Information
            </span>

            <div className="grid gap-3 mt-4">
              <div className="flex items-center">
                <label htmlFor="fullName">
                  Full Name: <sup className="text-red-500">*</sup>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={RegistrationData.fullName}
                  onChange={handleChange}
                  className="mx-5 border"
                  required
                />
              </div>

              <div className="flex items-center">
                <label>
                  Gender: <sup className="text-red-500">*</sup>
                </label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mx-5"
                  onChange={handleChange}
                  checked={RegistrationData.gender === "Male"}
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mx-5"
                  onChange={handleChange}
                  checked={RegistrationData.gender === "Female"}
                />{" "}
                Female
              </div>

              <div className="flex items-center">
                <label htmlFor="email">
                  Email:<sup className="text-red-500">*</sup>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mx-5 border"
                  value={RegistrationData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="number">
                  Mobile Number:<sup className="text-red-500">*</sup>
                </label>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  className="mx-5 border"
                  required
                  value={RegistrationData.number}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="dob">
                  Date of Birth:<sup className="text-red-500">*</sup>
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="mx-5 border"
                  required
                  value={RegistrationData.dob}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
            <span className="px-2 text-2xl text-blue-400 bg-white absolute -top-4">
              Academic Details
            </span>

            <div className="grid gap-3 mt-4">
              <div className="flex items-center">
                <label htmlFor="qualification">
                  Qualification: <sup className="text-red-500">*</sup>
                </label>
                <select
                  name="qualification"
                  id="qualification"
                  className="mx-5 border"
                  value={RegistrationData.qualification}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select Qualification</option>
                  <option value="10">Secondary Schooling</option>
                  <option value="12">Senior Secondary Schooling</option>
                  <option value="UG">Graduation</option>
                  <option value="PG">Post Graduation</option>
                  <option value="PHD">PhD</option>
                </select>
              </div>

              <div className="flex items-center">
                <label htmlFor="score">
                  Percentage / Grade : <sup className="text-red-500">*</sup>
                </label>
                <input
                  type="text"
                  name="score"
                  id="score"
                  className="mx-5 border"
                  required
                  value={RegistrationData.score}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
            <span className="px-2 text-2xl text-blue-400 bg-white absolute -top-4">
              Address
            </span>

            <div className="grid gap-3 mt-4">
              <div className="flex items-center">
                <label htmlFor="address">
                  Residential Address: <sup className="text-red-500">*</sup>
                </label>
                <textarea
                  name="address"
                  id="address"
                  className="mx-5 border"
                  value={RegistrationData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="city">
                  City:<sup className="text-red-500">*</sup>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="mx-5 border"
                  required
                  value={RegistrationData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="pinCode">
                  Pin Code:<sup className="text-red-500">*</sup>
                </label>
                <input
                  type="tel"
                  name="pinCode"
                  id="pinCode"
                  className="mx-5 border"
                  required
                  value={RegistrationData.pinCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
            <span className="px-2 text-2xl text-blue-400 bg-white absolute -top-4">
              Guardian Details
            </span>

            <div className="grid gap-3 mt-4">
              <input
                type="text"
                name="guardianName"
                placeholder="Guardian Name"
                className="mx-5 border"
                value={RegistrationData.guardianName}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="guardianNumber"
                placeholder="Guardian Contact"
                className="mx-5 border"
                value={RegistrationData.guardianNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
            <span className="px-2 text-2xl text-blue-400 bg-white absolute -top-4">
              Coaching Information
            </span>

            <select
              name="coachingInfo"
              className="mx-5 border mt-4"
              value={RegistrationData.coachingInfo}
              onChange={handleChange}
              required
            >
              <option value="">--Select</option>
              <option value="friends">Friends</option>
              <option value="ads">Online Ads</option>
              <option value="newspaper">Newspaper</option>
              <option value="socialMedia">Social Media</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="text-center text-white mt-10">
            <button
              type="submit"
              className="border bg-blue-950 rounded-2xl py-2 px-5"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default RegistrationPage;

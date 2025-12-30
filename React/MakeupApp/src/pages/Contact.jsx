import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setContactData((prev) => ({
        ...prev,
        skill: checked
          ? [...prev.skill, value]
          : prev.skill.filter((item) => item !== value),
      }));
    } else {
      setContactData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form Data:", contactData);

      // Dummy API call
      await fetch("https://official-joke-api.appspot.com/jokes/random");
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }

    handleClearForm();
  };

  return (
    <div className="text-center">
      <h1 className="text-rose-900 text-4xl font-bold mb-4">Contact Us</h1>

      <form onSubmit={handleSubmit} onReset={handleClearForm}>
        <div>
          <label className="m-1">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={contactData.fullName}
            onChange={handleChange}
            className="border p-2 rounded m-2"
            required
          />
        </div>

        <div>
          <label className="mr-7">Email:</label>
          <input
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            className="border p-2 rounded m-2"
            required
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="number"
            name="phone"
            value={contactData.phone}
            onChange={handleChange}
            className="border p-2 rounded m-2"
          />
        </div>

        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={contactData.city}
            onChange={handleChange}
            className="border p-2 rounded m-2"
          />
        </div>

        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={contactData.subject}
            onChange={handleChange}
            className="border p-2 rounded m-2"
          />
        </div>

        <div>
          <label>Religion:</label>
          <select
            name="religion"
            value={contactData.religion}
            onChange={handleChange}
            className="border p-2 rounded m-2"
          >
            <option value="">--Select--</option>
            <option value="islam">Islam</option>
            <option value="hinduism">Hinduism</option>
            <option value="christianity">Christianity</option>
            <option value="buddhism">Buddhism</option>
            <option value="sikhism">Sikhism</option>
          </select>
        </div>

        <div>
          <label className="m-3">Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={contactData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={contactData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={contactData.gender === "other"}
            onChange={handleChange}
          />{" "}
          Other
        </div>

        <div>
          <label className="m-4">Skills:</label>

          {["html", "css", "js", "react"].map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                name="skill"
                value={skill}
                checked={contactData.skill.includes(skill)}
                onChange={handleChange}
              />{" "}
              {skill.toUpperCase()}
            </label>
          ))}
        </div>

        <div className="flex justify-center align-bottom">
          <label className="mt-6">Message:</label>

          <textarea
            name="message"
            value={contactData.message}
            onChange={handleChange}
            className="border p-2 rounded m-2"
            required
          ></textarea>
        </div>

        <div className="mt-3">
          <button
            type="reset"
            className="bg-gray-500 text-white px-4 py-1 rounded m-1"
          >
            Clear
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded m-1"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

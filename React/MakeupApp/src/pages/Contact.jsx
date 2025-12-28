import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  // const Valid = () => {
  //   let isValid = true;
  //   if (!/^[a-Za-z]+$/.test(fullName)) {
  //     isValid = false;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = {
        fullName,
        email,
        message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }

    handleClearForm();
  };
  return (
    <>
      <div className="">
        <h1 className=" text-rose-900 text-center text-4xl font-bold border-b-2 mb-2">
          Contact Us
        </h1>
        <div className=" text-center">
          <form>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="border p-2 rounded-2xl m-1.5"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="Email"
                className="border p-2 rounded-2xl m-1.5 ml-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Mesaage</label>
              <textarea
                name="message"
                className="border p-2 rounded-2xl m-1.5 ml-1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message"
                required
              ></textarea>
              <div>
                {" "}
                <button
                  type="reset"
                  className="border m-2 bg-blue-500 text-white p-1 rounded-xl border-black border-2 "
                  onClick={handleClearForm}
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  className="border m-2  bg-blue-500 text-white rounded-xl border-black border-2 p-1"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;

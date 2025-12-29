import React, { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setFullName("");
    setMobile("");
    setEmail("");
    setAddress("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );

      const formData = {
        fullName,
        mobile,
        email,
        address,
        password,
      };

      console.log("Form Data:", formData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      handleClearForm();
    }
  };

  return (
    <>
      <div className="text-amber-950">
        <h1 className="text-rose-900 text-center text-4xl font-bold border-b-2 mb-2">
          SIGN UP
        </h1>

        <div className="text-center">
          <form onSubmit={handleSubmit}>
            <div>
              <label>FULL Name:</label>
              <input
                type="text"
                className="border p-2 rounded-2xl m-1.5"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Your Full Name"
                required
              />
            </div>

            <div>
              <label>Mobile Number:</label>
              <input
                type="tel"
                className="border p-2 rounded-2xl m-1.5"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Your Number"
                required
              />
            </div>

            <div>
              <label>E-mail:</label>
              <input
                type="email"
                className="border p-2 rounded-2xl m-1.5 ml-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div>
              <label>Address:</label>
              <textarea
                className="border p-2 rounded-2xl m-1.5 ml-1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Your Address"
                required
              ></textarea>
            </div>

            <div>
              <label>Create Password:</label>
              <input
                type="password"
                className="border p-2 rounded-2xl m-1.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                required
              />
            </div>

            <button
              type="button"
              onClick={handleClearForm}
              className="border m-2 bg-red-500 text-white rounded-xl border-black border-2 p-1"
            >
              Reset
            </button>

            <button
              type="submit"
              className="border m-2 bg-green-500 text-white rounded-xl border-black border-2 p-1"
            >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

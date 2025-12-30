import React, { useState } from "react";
import makeupbackground from "../assets/makeupbackground.png";

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setEmailOrMobile("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await res.json();

      const loginData = {
        emailOrMobile,
        password,
      };

      console.log("Login Data:", loginData);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setIsLoading(false);
      handleClearForm();
    }
  };

  return (
    <>
      <div className="border shadow w-2xs h-80 text-center mx-auto my-25 rounded-3xl">
        <div className="text-amber-950  shadow w-2xs h-80 text-center">
          <h1 className="text-rose-900 text-center text-4xl font-bold  mb-2">
            LOGIN
          </h1>

          <div className="text-center m-1">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email or Mobile:</label>
                <input
                  type="text"
                  className="border p-2 rounded-2xl m-2.5"
                  value={emailOrMobile}
                  onChange={(e) => setEmailOrMobile(e.target.value)}
                  placeholder="Enter Email or Mobile"
                  required
                />
              </div>

              <div>
                <label className="m-1">Password:</label>
                <input
                  type="password"
                  className="border p-2 rounded-2xl m-2.5 ml-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
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
                disabled={isLoading}
                className="border m-2 bg-green-500 text-white rounded-xl border-black border-2 p-1"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

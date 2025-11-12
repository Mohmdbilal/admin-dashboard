import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usernameIcon from "../assets/username-icon.svg";
import passwordIcon from "../assets/password-icon.svg";
import { loginUser } from "../api/authApi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(username, password);
      console.log("Login success:", data);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className="
        w-full h-screen flex items-center justify-between 
        bg-cover bg-center px-12 
        max-md:flex-col max-md:justify-center max-md:gap-10
      "
      style={{ backgroundImage: "url('/login-background.jpg')" }}
    >
      {/* LEFT SIDE */}
      <div
        className="
          text-white max-w-[500px] p-10
          max-md:text-center max-md:p-0 max-md:w-full
        "
      >
        <h1 className="font-poppins font-bold text-[40px] mb-4  max-md:text-[32px] max-sm:text-[32px]">
          Welcome Back
        </h1>
        <p
          className="
            font-poppins font-medium text-[18px]
            max-md:text-[16px] max-sm:text-[12px] 
            max-sm:mx-auto max-sm:w-[300px]
          "
        >
          Login to your admin dashboard and manage dementia care efficiently
        </p>
      </div>

      {/* RIGHT SIDE */}
      <form
        onSubmit={handleLogin}
        className="
          w-[550px] h-[420px] bg-white/40 backdrop-blur-sm rounded-3xl 
          shadow-lg p-8 flex flex-col gap-6
          max-lg:w-[450px] max-md:w-[400px] max-sm:w-[90%] max-sm:h-auto
        "
      >
        <h2 className="text-white font-poppins font-bold text-[25px] mb-2 text-left max-sm:text-[20px]">
          Login
        </h2>

        <div className="relative w-full ">
          <img
            src={usernameIcon}
            alt="Username Icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-80"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
              w-full h-[55px] pl-14 pr-4 rounded-xl 
              text-[18px] font-poppins font-medium text-gray-800 placeholder-gray-600 outline-none
              max-sm:text-[16px] max-sm:h-[50px]
            "
          />
        </div>

        <div className="relative w-full">
          <img
            src={passwordIcon}
            alt="Password Icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-80"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full h-[55px] pl-14 pr-4 rounded-xl 
              text-[18px] font-poppins font-medium text-gray-800 placeholder-gray-600 outline-none
              max-sm:text-[16px] max-sm:h-[50px] p
            "
          />
          <p
            onClick={() => navigate("/forgot-password")}
            className="
              text-black text-[14px] font-poppins font-medium absolute right-2 bottom-[-22px] 
              cursor-pointer hover:underline
            "
          >
            Forgot Password?
          </p>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm font-poppins">{error}</p>}

        <button
          type="submit"
          className="
            w-full h-[55px] bg-[#7C3AED] text-white 
            font-poppins font-bold text-[18px] rounded-xl mt-5
            max-sm:h-[50px] max-sm:text-[16px] 
          "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import usernameIcon from "../assets/username-icon.svg";
import crossIcon from "../assets/cross-icon.svg"; 

const ForgotPassword = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSendClick = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div
      className="
        w-full h-screen flex flex-col items-center justify-center bg-white relative
        max-md:px-6 max-md:py-10
      "
    >
      <h1
        className="
          font-poppins font-bold text-[28px] text-black mb-3
          max-md:text-[24px] max-sm:text-[22px] max-sm:mb-2
        "
      >
        Forgot Password?
      </h1>

      <p
        className="
          font-poppins font-medium text-[16px] text-gray-500 mb-8
          max-md:text-[16px] max-sm:text-[14px] max-sm:w-[300px] max-sm:text-center
        "
      >
        Enter your email or username to receive a reset link.
      </p>

      <div className="relative mb-6 w-[480px] max-lg:w-[400px] max-md:w-[350px] max-sm:w-[90%]">
        <img
          src={usernameIcon}
          alt="Username Icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-80"
        />
        <input
          type="text"
          placeholder="Username / Email"
          className="
            w-full h-[55px] pl-14 pr-4 rounded-xl 
            text-[18px] font-poppins font-medium text-gray-800 placeholder-gray-600 outline-none 
            border border-gray-300
            max-sm:text-[16px] max-sm:h-[50px]
          "
        />
      </div>

      <button
        onClick={handleSendClick}
        className="
          w-[480px] h-[55px] bg-[#7C3AED] text-white 
          font-poppins font-bold text-[18px] rounded-xl
          max-lg:w-[400px] max-md:w-[350px] max-sm:w-[90%]
          max-sm:h-[50px] max-sm:text-[16px]
        "
      >
        Send Reset Link
      </button>

      {/* 🟣 Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            className="
              relative bg-white w-[400px] p-8 rounded-2xl shadow-lg text-center
              max-sm:w-[85%] max-sm:p-6
            "
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <img src={crossIcon} alt="Close" className="w-5 h-5" />
            </button>

            {/* Popup Content */}
            <h2
              className="
                font-poppins font-semibold text-[22px] text-[#7C3AED] mb-2
                max-sm:text-[18px]
              "
            >
              Reset Link Sent!
            </h2>
            <p
              className="
                font-poppins font-medium text-[16px] text-gray-600
                max-sm:text-[14px]
              "
            >
              Please check your email to reset your password.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

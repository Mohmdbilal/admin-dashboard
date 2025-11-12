import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "../assets/dashboard-icon.svg";
import appoinmentIcon from "../assets/appoinment-icon.svg";
import customersIcon from "../assets/customers-icon.svg";
import doctorsIcon from "../assets/doctors-icon.svg";
import departmentIcon from "../assets/department-icon.svg";
import settingsIcon from "../assets/settings-icon.svg";
import logoutIcon from "../assets/logout-icon.svg";
import optionIcon from "../assets/option-icon.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", icon: dashboardIcon, active: true },
    { name: "Appointments", icon: appoinmentIcon },
    { name: "Customers", icon: customersIcon },
    { name: "Doctors", icon: doctorsIcon },
    { name: "Department", icon: departmentIcon },
    { name: "Settings", icon: settingsIcon },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`
          bg-[#7C3AED] text-white p-4 flex flex-col justify-between
          w-[200px] h-[760px] m-5 rounded-3xl flex-shrink-0
          max-sm:hidden mt-9
        `}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-16 mt-4 pl-5">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <h2 className="font-bold text-[16px] font-poppins">Emily</h2>
          </div>

          <ul className="flex flex-col gap-4 w-full">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 p-2 pl-8 w-full rounded-lg cursor-pointer ${
                  link.active
                    ? "bg-white text-[#7C3AED]"
                    : "hover:bg-white hover:text-[#7C3AED]"
                }`}
              >
                <img src={link.icon} className="w-5 h-5" alt={link.name} />
                <span className="text-xs font-poppins">{link.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={handleLogout}
          className="flex items-center gap-2 p-2 pl-10 w-full rounded-lg cursor-pointer hover:bg-white hover:text-[#7C3AED]"
        >
          <img src={logoutIcon} className="w-5 h-5" alt="Logout" />
          <span className="text-xs font-poppins">Logout</span>
        </div>
      </div>

      {/* Mobile Mini Sidebar */}
      <div className="hidden max-sm:flex bg-[#7C3AED] w-[50px] h-[50px] fixed top-16 left-0 rounded-tr-xl rounded-br-xl flex items-center justify-center z-50">
        <img
          src={optionIcon}
          alt="Menu"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-start z-50">
          <div className="w-[180px] h-full bg-[#7C3AED] text-white p-4 flex flex-col justify-between animate-slideIn">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col items-center mb-4">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <h2 className="font-bold text-[16px] font-poppins">Emily</h2>
            </div>

            <ul className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                    link.active
                      ? "bg-white text-[#7C3AED]"
                      : "hover:bg-white hover:text-[#7C3AED]"
                  }`}
                >
                  <img src={link.icon} className="w-5 h-5" alt={link.name} />
                  <span className="text-sm font-poppins">{link.name}</span>
                </li>
              ))}
            </ul>

            <div
              onClick={handleLogout}
              className="flex items-center gap-3 p-2 mt-4 cursor-pointer hover:bg-white hover:text-[#7C3AED] rounded-lg"
            >
              <img src={logoutIcon} className="w-5 h-5" alt="Logout" />
              <span className="text-sm font-poppins">Logout</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

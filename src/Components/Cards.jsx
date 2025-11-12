import React from "react";
import { motion } from "framer-motion";
import totalUserIcon from "../assets/totaluser-icon.svg";
import customersIcon from "../assets/customers.svg";
import upIcon from "../assets/up-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";
import activeIcon from "../assets/active-icon.svg";
import onleaveIcon from "../assets/onleave-icon.svg";
import nehaImg from "../assets/doctors/neha.jpg";
import rajeshImg from "../assets/doctors/rajesh.jpg";
import akhilImg from "../assets/doctors/akhil.jpg";
import aishaImg from "../assets/doctors/aisha.jpg";
import neetaImg from "../assets/doctors/neeta.jpg";

const Cards = () => {
  const doctors = [
    { name: "Dr Neha Menon", count: 14 },
    { name: "Dr Akhil Thomas", count: 16 },
    { name: "Dr Neeta Das", count: 15 },
  ];

  const clinics = [
    "Memory Care Unit",
    "Cognitive Therapy",
    "Behavioral Support",
    "Family Counseling",
    "Wellness & Rehab",
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 justify-start">
        <div className="flex flex-col gap-4 w-full sm:w-[250px]">
          {/* Total Users Card */}
          <div className="w-full h-[126px] bg-[#CFD2FF] rounded-xl shadow p-4 flex flex-col justify-between shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins font-medium text-[16px] text-black">
                Total Users
              </h3>
              <img
                src={totalUserIcon}
                alt="Total Users Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="font-poppins font-medium text-[35px] text-black">
              900
            </h2>
            <div className="flex items-center gap-2">
              <img src={upIcon} alt="Up Icon" className="w-4 h-4" />
              <span className="font-poppins font-medium text-[16px] text-black">
                +8% from last week
              </span>
            </div>
          </div>

          {/* Total Customers Card */}
          <div className="w-full h-[126px] bg-[#CFD2FF] rounded-xl shadow p-4 flex flex-col justify-between shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins font-medium text-[16px] text-black">
                Total Customers
              </h3>
              <img
                src={customersIcon}
                alt="Customers Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="font-poppins font-medium text-[35px] text-black">
              650
            </h2>
            <div className="flex items-center gap-2">
              <img src={upIcon} alt="Up Icon" className="w-4 h-4" />
              <span className="font-poppins font-medium text-[16px] text-black">
                +5% from last week
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Appointment Card */}
          <div className="w-full sm:w-[250px] h-[270px] bg-white rounded-xl shadow p-4 flex flex-col gap-4 font-poppins font-medium text-gray-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <h2 className="text-[16px] font-medium">Appointments</h2>
            <div className="flex items-center justify-between sm:justify-between w-full">
              <span className="text-[22px] font-medium text-[#7C3AED]">
                Total: 45 Today
              </span>
              <img src={calendarIcon} alt="Calendar" className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[135px]">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="w-full h-[35px] bg-[#E5E7EB] rounded-lg flex items-center justify-between px-3 text-sm"
                >
                  <span>{doctor.name}</span>
                  <span>{doctor.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinics Card */}
          <div className="w-full sm:w-[250px] h-[270px] bg-white rounded-xl shadow p-4 flex flex-col gap-4 font-poppins text-gray-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <h2 className="text-[16px] font-medium">Clinics</h2>
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[180px]">
              {clinics.map((clinic, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full bg-[#F3F4F6] rounded-lg px-3 h-[35px]"
                >
                  <span className="text-[12px] font-medium">{clinic}</span>
                  <div className="flex items-center gap-1">
                    <motion.img
                      src={activeIcon}
                      alt="Active Icon"
                      className="w-4 h-4"
                      animate={{ y: [1, 0, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <span className="text-[10px] text-[#939393] font-medium">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Card */}
          <div className="w-full sm:w-[250px] h-[270px] bg-white rounded-xl shadow p-4 flex flex-col justify-start font-poppins font-medium text-gray-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[16px] font-medium text-black">Revenue</h2>
              <span className="text-[12px] font-normal text-gray-700">
                This Week
              </span>
            </div>

            <h3 className="text-[40px] font-medium text-black mb-1">
              ₹3,55,000
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <img src={upIcon} alt="Up Icon" className="w-4 h-4" />
              <span className="text-[20px] font-medium text-black">
                +8% from last week
              </span>
            </div>

            <div className="mt-1">
              <h4 className="text-[12px] font-medium text-gray-600">Top</h4>
              <p className="text-[14px] font-medium text-black">
                Family Counseling — <span className="text-green-600">↑5%</span>
              </p>
            </div>

            <div className="mt-2">
              <h4 className="text-[12px] font-medium text-gray-600">Lowest</h4>
              <p className="text-[14px] font-medium text-black">
                Behavioral Support — <span className="text-red-600">↓2%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1080px] bg-white rounded-xl shadow p-4 flex flex-col font-poppins text-gray-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mt-4">
        <h2 className="text-[16px] font-medium mb-4">Doctors List</h2>

        {/* Doctors List Container */}
        <div className="flex flex-col gap-2">
          {[
            {
              name: "Dr. Neha Menon",
              department: "Memory Care",
              status: "Active",
              image: nehaImg,
            },
            {
              name: "Dr. Rajesh Kumar",
              department: "Neurology",
              status: "On Leave",
              image: rajeshImg,
            },
            {
              name: "Dr. Akhil Thomas",
              department: "Psychiatry",
              status: "Active",
              image: akhilImg,
            },
            {
              name: "Dr. Aisha Rahman",
              department: "Geriatrics",
              status: "On Leave",
              image: aishaImg,
            },
            {
              name: "Dr. Neeta Das",
              department: "Physiotherapy",
              status: "Active",
              image: neetaImg,
            },
          ].map((doctor, index) => (
            <div
              key={index}
              className="w-full h-[57px] bg-[#F3F4F6] rounded-lg flex items-center justify-between shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full overflow-hidden border border-gray-300">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-[16px] font-medium text-black">
                  {doctor.name}
                </span>
              </div>

              <span className="text-[16px] font-medium text-gray-700">
                {doctor.department}
              </span>

              <div className="flex items-center gap-2">
                {doctor.status === "Active" ? (
                  <motion.img
                    src={activeIcon}
                    alt={doctor.status}
                    className="w-3 h-3"
                    animate={{ y: [1, 0, 1] }} // moves up and down
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ) : (
                  <img
                    src={onleaveIcon}
                    alt={doctor.status}
                    className="w-3 h-3"
                  />
                )}

                <span
                  className={`text-[10px] font-medium ${
                    doctor.status === "Active"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {doctor.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

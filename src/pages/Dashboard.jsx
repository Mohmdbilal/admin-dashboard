import React from "react";
import Sidebar from "../Components/Sidebar";
import Cards from "../Components/Cards";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <h1 className="font-poppins font-extrabold text-[28px] text-[#7C3AED] p-6  block sm:hidden">
        Dashboard
      </h1>
      <Sidebar />
      <div className="flex-1 p-2">
        <h1 className="font-poppins font-extrabold text-[32px] text-[#7C3AED] mb-6 hidden sm:block">
          Dashboard
        </h1>
        <div className="flex-1 p-6">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

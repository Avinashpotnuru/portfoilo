import React, { useState } from "react";
import Experience from "../Experience";
import Skills from "../Skills";
import Education from "../Education";

const FullDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="py-5">
      <div className=" flex  justify-around items-center w-[90%] sm:w-[60%] md:w-[50%] lg:w-[30%] mx-auto">
        <button
          className={`py-2 px-4 text-sm rounded-t-lg  ${
            activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Experience
        </button>
        <button
          className={`py-2 px-4 text-sm rounded-t-lg ${
            activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Skills
        </button>
        <button
          className={`py-2 px-4 text-sm rounded-t-lg ${
            activeTab === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Education
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <Experience />}
        {activeTab === 2 && <Skills />}
        {activeTab === 3 && <Education />}
      </div>
    </div>
  );
};

export default FullDetails;

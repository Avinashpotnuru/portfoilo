import React from "react";

import { FaSchool, FaCalendarAlt } from "react-icons/fa";

import { HiAcademicCap } from "react-icons/hi";

import { TiLocation } from "react-icons/ti";

import { educationDetails } from "@/src/Data";

const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5 sm:my-8 w-full mx-auto">
      <h1 className="text-3xl font-medium my-3 md:my-6">Education Details</h1>
      <div className="flex flex-col border-2 border-gray-500 rounded-md  w-[95%] mx-auto sm:w-[90%] px-2 sm:px-5 ">
        <div className="grid grid-cols-1    divide-y-[2px] divide-gray-400 ">
          {educationDetails.map((val, idx) => (
            <div key={idx} className="p-3 ">
              <div className="flex items-center my-2 lg:my-3 ">
                <FaSchool className="sm:text-[30px] mx-4" />
                <h1 className=" font-bold  text-lg sm:text-2xl">{val.name}</h1>
              </div>
              <div className="flex items-center ">
                <FaCalendarAlt className="sm:text-[30px] mx-4" />
                <h1>{val.duration}</h1>
              </div>
              <div className="flex items-center my-2 lg:my-3  ">
                <HiAcademicCap className="sm:text-[30px] mx-4" />
                <h1 className=" font-semibold  text-base sm:text-lg">
                  {val.course}
                </h1>
              </div>

              <div className="flex items-center ">
                <TiLocation className="sm:text-[30px] mx-4" />
                <h1>{val.location}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

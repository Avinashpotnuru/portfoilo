import React from "react";

import { experienceData } from "@/src/Data";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-3xl font-medium my-3 md:my-6">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:w-[80%]">
        {experienceData.map((val) => {
          return (
            <div
              key={val.id}
              className="px-4 py-5  border-2 border-gray-400 mx-4 rounded-md"
            >
              <h1 className="text-[23px] font-bold my-2">{val.role}</h1>
              <h1 className="text-xl font-medium my-2">{val.company}</h1>
              <h1 className="text-base font-medium my-2">{val.duration}</h1>
              <ul className="list-disc mx-4 text-gray-700 ">
                {val.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

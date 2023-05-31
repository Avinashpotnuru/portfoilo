import React from "react";

import { skillsData } from "@/src/Data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5 w-full mx-auto">
      <h1 className="text-3xl font-medium my-3 md:my-6">Technical Skills</h1>
      <div className="flex flex-col border-2 border-gray-500 rounded-md lg:py-10  w-[95%] mx-auto sm:w-[90%] ">
        <h1 className="text-2xl font-medium my-3 md:my-6 text-center">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full">
          {skillsData.map((item, idx) => (
            <div
              key={idx}
              className="p-9 flex flex-col justify-center items-center"
            >
              <Image
                width={120}
                height={120}
                src={`/skills/skills${idx + 1}.png`}
                alt={`skills${idx + 1}`}
              />
              <h1 className="text-center my-2 font-semibold">{item}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import ProjectCard from "../ProjectCard";

const MyProjects = () => {
  return (
    <div className="mt-2 md:my-10 ">
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-5 md:my-10">
        MyProjects
      </h1>
      <div className="mb-5 grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-y-10 lg:gap-y-14 md:w-[90%]  md:mx-auto">
        {[...Array(6)].map((item, idx) => (
          <ProjectCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

import React from "react";

const ProjectCard = () => {
  return (
    <div className="min-h-[400px] bg-slate-400 w-[90%] mx-auto shadow-2xl rounded-2xl py-4 px-3">
      <div className="h-1/2">
        <img
          src="/project2.png"
          alt="project2"
          className=" h-full w-full mx-auto"
        />
      </div>

      <div className="h-1/2">
        <h1 className="text-lg font-extrabold text-center my-4">
          Project Name
        </h1>
        <h1 className="text-center">
          implemented Jobby App where users can log in and can see a list of
          jobs with search by Job title,
        </h1>
        <div className="text-center my-4 ">
          <button className="bg-[#0c7fb0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mx-auto my-1 ">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

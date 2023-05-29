import { tabs, projectsData } from "@/src/Data";
import React, { useState } from "react";
import ProjectCard from "../ProjectCard";

const ProjectsFilter = () => {
  const [tabsId, setTabsId] = useState("");

  const filterData = !tabsId
    ? projectsData
    : projectsData.filter((item) => item.category === tabsId);

  //   console.log(filterData);
  //   console.log(tabsId);

  return (
    <div>
      <div className="flex flex-col sm:flex-row w-full sm:justify-around sm:items-center">
        <h1 className="text-3xl font-bold text-cyan-500  sm:my-4 text-center my-2 sm:w-1/2">
          My Projects
        </h1>
        <div className="flex justify-center space-x-10 items-center my-9 sm:w-1/2">
          {tabs.map((val, idx) => (
            <button
              onClick={() => setTabsId(val?.category)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              key={idx}
            >
              {val.tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-5 grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-y-10 lg:gap-y-14 md:w-[90%]  md:mx-auto">
        {filterData.map((item, idx) => (
          <ProjectCard data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;

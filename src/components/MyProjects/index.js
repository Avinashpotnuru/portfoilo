import React from "react";
import ProjectCard from "../ProjectCard";
import { projectsData } from "@/src/Data";

import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <div className="mt-2 md:my-10 ">
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-5 md:my-10">
        MyProjects
      </h1>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="mb-5 grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-y-10 lg:gap-y-14 md:w-[90%]  md:mx-auto"
      >
        {projectsData.map((item, idx) => (
          <ProjectCard data={item} key={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default MyProjects;
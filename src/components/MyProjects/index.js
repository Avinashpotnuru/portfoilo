import React from "react";

import ProjectCard from "../ProjectCard";

import { projectsData } from "@/src/Data";

// third party imports

import { motion } from "framer-motion";
import TextContainer from "../TextAnimationConatiner";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const MyProjects = () => {
  return (
    <div className="mt-2 md:my-10 ">
      <TextContainer
        text="My Projects"
        className="text-2xl text-[#0863bf] font-roboto-slab md:text-5xl font-bold text-center mb-5 md:my-10"
      />

      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="mb-5 grid grid-cols-1 gap-4  sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 mx-auto w-[90%]    "
      >
        {projectsData.slice(0, 3).map((item, idx) => (
          <ProjectCard data={item} key={idx} />
        ))}
      </motion.div>
      <div className="flex justify-center items-center group ">
        <Link href={"/projects"}>
          <div className="bg-[#0c7fb0] font-roboto-slab  transition-all duration-1000  ease-in-out hover:bg-blue-700 flex justify-center items-center space-x-2 text-white  py-2 px-4 rounded">
            <h1 className="">More Projects</h1>
            <div className="hidden group-hover:block  ">
              <AiOutlineArrowRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyProjects;

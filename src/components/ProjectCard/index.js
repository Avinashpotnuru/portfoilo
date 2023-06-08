import Link from "next/link";

import React from "react";

// third party imports

import { motion } from "framer-motion";

const ProjectCard = ({ data }) => {
  // console.log(data);
  return (
    <motion.div
      whileHover={{ y: -10, duration: 0.02, delay: 0.1 }}
      initial={{
        opacity: 0,
        translateX: data.id % 2 == 1 ? "-100vh" : "130vh",
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ delay: 1, duration: data.id * 0.3 }}
      className="min-h-[400px] content  mx-auto shadow-2xl rounded-xl "
    >
      <div className="h-1/2">
        <img
          src={data.imgUrl}
          alt="project2"
          className=" h-full w-full mx-auto border-t rounded-t-[12px] "
        />
      </div>

      <div className="h-1/2 px-3 text-white">
        <h1 className="text-lg font-extrabold text-center  my-4 font-Lexend ">
          {data?.title}
        </h1>
        <h1 className="text-center">{data?.description}</h1>
        <div className="text-center my-4  ">
          <Link href={data?.Link}>
            <button className="btn from-left text-white">Read more</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

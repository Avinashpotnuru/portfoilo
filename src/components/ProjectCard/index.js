import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

const ProjectCard = ({ data }) => {
  // console.log(data);
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: data.id % 2 == 1 ? "-100vh" : "150vh",
      }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 1, duration: 1.3 }}
      className="min-h-[400px] bg-slate-400 w-[90%] mx-auto shadow-2xl rounded-2xl  "
    >
      <div className="h-1/2">
        <img
          src={data.imgUrl}
          alt="project2"
          className=" h-full w-full mx-auto border-t rounded-t-[16px] "
        />
      </div>

      <div className="h-1/2 px-3">
        <h1 className="text-lg font-extrabold text-center my-4">
          {data?.title}
        </h1>
        <h1 className="text-center">{data?.description}</h1>
        <div className="text-center my-4 ">
          <Link href={data?.Link}>
            <button className="bg-[#0c7fb0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mx-auto my-1 ">
              Read more
            </button>

            {/* <button className="readMore text-white">Read more</button> */}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

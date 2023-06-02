/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.06,
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

const MyDetails = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:w-[80%] lg:w-[85%] mx-auto justify-center items-center my-4 ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="sm:w-1/2 "
      >
        <img
          className="w-[90%] sm-[95%] md:h-[380px] md:w-[380px] lg:h-[431px] lg:w-[400px] mx-auto"
          src="/mypic.jpg"
          alt="myImage"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="sm:w-1/2  mx-auto p-5"
      >
        <h1 className="text-2xl  uppercase font-semibold my-1">About Me</h1>
        <h1 className="text-3xl font-roboto-slab  font-bold my-1 lg:text-[30px] lg:my-2">
          <span className="text-xl  font-semibold my-1 ">{"I'm "}</span>
          Avinash Potnuru
        </h1>
        <h1 className="text-xl   font-medium my-1 lg:my-2">
          FrontEnd Developer
        </h1>
        <h1 className="text-base   my-1">
          Hello there Iam Avinash Potnuru, and I develop websites using the full
          stack. I have experience with web design and web development languages
          and frameworks, including HTML, CSS, Tailwind CSS, Bootstrap,
          JavaScript, React js, Node js, express js, Python, SQLite.
        </h1>
        <div className="  flex flex-col lg:flex-row justify-center lg:justify-around items-center my-3 w-[80%] lg:w-full  mx-auto ">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="bg-[#0c7fb0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 w-full lg:w-[45%] my-1 "
          >
            <Link href={"/contact-us"}>Contact Us</Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MyDetails;

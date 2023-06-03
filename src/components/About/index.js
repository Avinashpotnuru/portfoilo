/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

// third party imports

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:w-[95%] lg:w-[92%] mx-auto justify-center items-center my-4 ">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: "100vh" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="sm:w-1/2 order-2 sm:order-1 mx-auto p-5 md:p-2"
      >
        <motion.h1
          whileHover={{ scale: 1.2, originX: 0 }}
          className="text-base  uppercase font-semibold my-1"
        >
          hello,
        </motion.h1>
        <h1 className="text-3xl font-roboto-slab   font-bold my-1 lg:text-[40px] lg:my-2">
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
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center my-3 lg:w-[90%] lg:space-x-4  mx-auto ">
          <button className="button-background-move w-[70%] lg:w-1/2   my-3 ">
            <Link href={"/contact-us"}>Contact Us</Link>
          </button>

          <button className="button-background-move w-[70%] lg:w-1/2   my-3">
            <a
              href="/AvinashPotnuruResume.pdf"
              download="AvinashPotnuruResume.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: "-100vh" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="sm:w-1/2 order-1 sm:order-2"
      >
        <img
          className="w-[90%] sm-[95%] md:h-[380px] md:w-[380px] lg:h-[431px] lg:w-[400px] mx-auto"
          src="/certificates/profile-pic (2).png"
          alt="myImage"
        />
      </motion.div>
    </div>
  );
};

export default About;

import Link from "next/link";
import React from "react";

import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#061820] w-full text-white py-5 ">
      <div className="sm:w-[80%] md:w-[70%] lg:w-[30%] sm:mx-auto">
        <div className="flex justify-around items-center py-5  ">
          <h1>
            <Link href={"/"}>Home</Link>
          </h1>
          <h1>
            <Link href={"/about"}>About</Link>
          </h1>
          <h1>
            <Link href={"/projects"}>Projects</Link>
          </h1>
        </div>
        <div className="flex justify-around items-center py-5 ">
          <a
            className="social-networks square spin-icon"
            href="https://github.com/Avinashpotnuru"
            target="_blank"
          >
            <BsGithub color="red" size={34} />
          </a>
          <a
            href="https://www.linkedin.com/in/avinash-potnuru/"
            target="_blank"
          >
            <BsLinkedin color="red" size={34} />
          </a>

          <BsInstagram color="red" size={34} />
          <BsFacebook color="red" size={34} />
        </div>
        <h1 className="text-center py-4 px-5">
          Copyright ©2023 Avinash Potnuru, Inc. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;

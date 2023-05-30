import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

import { useDispatch } from "react-redux";

import { openContactPopup } from "@/src/store/slices/popup";
const Contact = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-5 md:my-10">
        Get in touch
      </h1>

      <div className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-y-10 lg:gap-y-14 md:w-[90%]  md:mx-auto px-3">
        <div className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5 ">
          <div className="my-5">
            <div className="sm:hidden">
              <FaUserAlt size={30} />
            </div>
            <div className="hidden sm:block">
              <FaUserAlt size={50} />
            </div>
          </div>
          <h1 className="sm:text-2xl font-semibold text-center">
            Avinash Potnuru
          </h1>
        </div>
        <div className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5 ">
          <div className="my-5">
            <div className="sm:hidden">
              <MdCall size={30} />
            </div>
            <div className="hidden sm:block">
              <MdCall size={50} />
            </div>
          </div>
          <h1 className="sm:text-2xl font-semibold text-center">8919016096</h1>
        </div>
        <div className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5 ">
          <div className="my-5">
            <div className="sm:hidden">
              <HiOutlineMail size={30} />
            </div>
            <div className="hidden sm:block">
              <HiOutlineMail size={50} />
            </div>
          </div>
          <div className="max-w-[90%] flex justify-center items-center  sm:hidden ">
            <h1 className="sm:text-2xl font-semibold  text-center  ">
              potnuruavinash111
              <br />
              @gmail.com
            </h1>
          </div>
          <div className="max-w-[90%] justify-center items-center  flex ">
            <h1 className="sm:text-2xl font-semibold  text-center hidden sm:block  ">
              potnuruavinash111 @gmail.com
            </h1>
          </div>
        </div>
        <div className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5  ">
          <div className="my-4">
            <h1 className="sm:text-2xl font-semibold text-center">Follow </h1>
          </div>
          <div className="flex justify-around items-center py-5 w-full sm:w-[60%] ">
            <a href="https://github.com/Avinashpotnuru" target="_blank">
              <BsGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/avinash-potnuru/"
              target="_blank"
            >
              <BsLinkedin size={25} />
            </a>

            <BsInstagram size={25} />
            <BsFacebook size={25} />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center my-3 ">
        <button
          onClick={() => dispatch(openContactPopup())}
          className="contact"
        >
          Contact US
          <span class="first"></span>
          <span class="second"></span>
          <span class="third"></span>
          <span class="fourth"></span>
        </button>
      </div>
    </div>
  );
};

export default Contact;

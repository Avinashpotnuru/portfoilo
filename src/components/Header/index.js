import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { openHeaderPopup, closeHeaderPopup } from "@/src/store/slices/popup";

const Header = () => {
  // const dispatch = useSelector();
  let Links = [
    { name: "HOME", link: "/" },

    { name: "ABOUT", link: "/about" },
    { name: "PROJECT'S", link: "/projects" },
    { name: "CONTACT", link: "/contact-us" },
  ];
  let [open, setOpen] = useState(false);

  // const openToggle = useSelector((state) => state.headerPopup.status);
  return (
    <div className="shadow-md w-full relative ">
      <div className="flex items-center justify-between  bg-white py-4 md:px-10 px-7 fixed top-0 left-0 right-0 z-10">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
  text-gray-800"
        >
          <Link href={"/"}> Avinash Potnuru</Link>
        </div>

        <div onClick={() => setOpen(!open)} className="sm:hidden">
          {!open ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-20 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              onClick={() => setOpen(false)}
              key={link.name}
              className="md:ml-8 text-lg md:my-0 my-7"
            >
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

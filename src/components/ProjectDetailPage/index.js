import Link from "next/link";

import React from "react";

// third party imports

import { IoIosArrowBack } from "react-icons/io";

import { BsGithub } from "react-icons/bs";

const ProjectDetailPage = ({ data }) => {
  console.log(data);
  return (
    <div className="px-5 my-5 sm:my-20 sm:w-[95%] lg:w-[90%] sm:mx-auto ">
      <Link href={"/projects"}>
        <button className="bg-sky-300 p-3 cursor-pointer">
          <IoIosArrowBack />
        </button>
      </Link>
      <div className="flex flex-col sm:flex-row my-4 ">
        <div className="sm:w-1/2  sm:flex sm:justify-center sm:items-center ">
          <img
            className="w-[95%] h-full  sm:h-[90%]  sm:my-auto  mx-auto object-fill "
            src={data.imgUrl}
            alt="todo"
          />
        </div>
        <div className="sm:w-1/2 sm:px-10 ">
          <h1 className="text-3xl font-bold text-cyan-500 my-2 sm:my-4  ">
            {data?.title}
          </h1>
          <h1 className="text-base  my-2 ">
            <span className="text-xl font-bold ">Technologies :</span>
            {data?.technologies}
          </h1>
          <h1 className="text-gray-500 my-2">{data?.description}</h1>
          <div className="flex items-center mt-4">
            <BsGithub color="blue" size={12} />
            <a className="text-blue-500 hover:text-blue-700 ml-2 " href="">
              Github Source Code
            </a>
          </div>

          <br />
          <a className="text-blue-500 hover:text-blue-700 " href="">
            Project Link{data?.projectLink}
          </a>
          <hr className="border-t-2 border-gray-300 my-4" />
          <h1>
            <span className="text-lg font-bold ">Creator - </span>Avinash
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

import Link from "next/link";

import React from "react";

// third party imports

import { IoIosArrowBack } from "react-icons/io";

import Image from "next/image";

const ProjectDetailPage = ({ data, pageName }) => {
  console.log(pageName);

  return (
    <div className="px-5 my-5 md:my-20 w-full md:w-[95%] lg:w-[90%] sm:mx-auto   ">
      <Link href={"/projects"}>
        <button className="bg-sky-300 p-3 cursor-pointer">
          <IoIosArrowBack />
        </button>
      </Link>
      <div className="flex flex-col md:flex-row my-4 ">
        <div className="md:w-1/2  sm:flex sm:justify-center sm:items-center ">
          <Image
            width={500}
            height={500}
            className="w-[95%] h-full  md:h-[60%] lg:h-[90%]  sm:my-auto  mx-auto object-fill "
            src={data.imgUrl}
            alt="todo"
          />
        </div>
        <div className="md:w-1/2  md:px-10 flex flex-col justify-center items-start space-y-1 md:space-y-3  mt-5 md:mt-0 ">
          <h1 className=" text-2xl md:text-3xl font-bold text-cyan-500    ">
            {data?.title}
          </h1>

          <h1 className="text-xl sm:text-2xl font-bold text-center mb-6  mx-auto md:mx-0 ">
            Technologies
          </h1>
          <div className=" w-[90%] mx-auto overflow-x-auto overflow-desk  ">
            <div className="flex space-x-4  w-[120%] sm:w-full mx-auto  ">
              {data?.technologies.map((val, idx) => (
                <div className="my-auto  " key={idx}>
                  {val?.icon}
                </div>
              ))}
            </div>
          </div>

          <h1 className="text-gray-500 ">{data?.description}</h1>
          {/* <div className="flex items-center mt-4">
            <BsGithub color="blue" size={12} />
            <a className="text-blue-500 hover:text-blue-700 ml-2 " href="">
              Github Source Code
            </a>
          </div> */}

          <a className="text-blue-500 hover:text-blue-700 my-2 " href="">
            Project Link{data?.projectLink}
          </a>
          <hr className="border-t-2 border-gray-300 my-4 w-full" />
          <h1>
            <span className="text-lg font-bold ">Creator - </span>Avinash
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

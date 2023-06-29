import TestCard from "@/src/components/TestCard";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";

const iconsDataaaa = [
  { id: 1, icon: <AiFillHtml5 className="text-[70px]" /> },
  { id: 2, icon: <AiFillHtml5 /> },
];

const TestPage = () => {
  return (
    // <div className=" w-[50%]  ">
    //   <div className=" flex space-x-6 bg-slate-800 flex-nowrap  w-[3500px]">
    //     {[...Array(9)].map((item, idx) => {
    //       return <TestCard key={idx} />;
    //     })}
    //   </div>
    // </div>
    <div className="my-32">
      {iconsData.map((val, idx) => {
        return <div key={idx}>{val.icon}</div>;
      })}
    </div>
  );
};

export default TestPage;

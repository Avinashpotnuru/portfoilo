import React from "react";

import { FaUserTie } from "react-icons/fa";
import { IoCall } from "react-icons/io";

// const FaUserTie = contactDetails[1];

const ContactCard = ({ data }) => {
  // console.log("data", data);
  return (
    <div className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center border border-blue-300 ">
      {/* <div className="my-5">{data?.icon}</div> */}
      {/* {data.id == 1 && <FaUserTie size={50} />}
      {data.id == 2 && <IoCall />} */}

      <h1 className="text-2xl font-semibold text-center">{data?.title}</h1>
    </div>
  );
};

export default ContactCard;

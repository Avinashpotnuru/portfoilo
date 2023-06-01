import { useState } from "react";
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";

import Modal from "../UI/Model";

import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";

import {
  openContactPopup,
  closeContactPopup,
  openDetailsPopup,
} from "@/src/store/slices/popup";

const inputVariants = {
  hidden: {
    x: "-200vh",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.9,
      duration: 0.8,
    },
  },
};

const ContactPopup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");
  const contactToggle = useSelector(
    (state) => state.popSlice.contactPopup.status
  );
  console.log(contactToggle);

  const onSubmit = (data, e) => {
    console.log(data);
    setData(data);
    dispatch(openDetailsPopup(data));
    dispatch(closeContactPopup());
    reset();
  };

  return (
    <Modal
      parentClasses={" flex justify-center items-center  w-full m-auto"}
      isOpen={contactToggle}
    >
      <div className="bg-slate-500 relative   w-[95%] h-[70%] sm:h-[500px] sm:w-[500px] flex flex-col justify-center items-center">
        <div
          onClick={() => dispatch(closeContactPopup())}
          className="absolute top-7 right-7 hover:text-[20px]"
        >
          <AiOutlineClose />
        </div>
        <h1 className="text-3xl my-6 font-bold ">Contact Us</h1>
        <form
          className="flex flex-col justify-center items-center  w-[80%]  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full ">
            <label
              className="block text-gray-700 text-sm font-bold my-3"
              for="firstName"
            >
              FULL NAME
            </label>
            <motion.input
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("firstName", {
                required: true,
              })}
              placeholder="First name"
            />
          </div>
          <div className="flex flex-col w-full ">
            <label className="block text-gray-700 text-sm font-bold my-3">
              EMAIL
            </label>
            <motion.input
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email", {
                required: true,
              })}
              placeholder="Enter ur Email"
            />
          </div>
          <div className="flex flex-col w-full ">
            <label className="block text-gray-700 text-sm font-bold my-3">
              MESSAGE
            </label>

            <motion.textarea
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("message", {
                required: true,
              })}
              placeholder="Message"
            />
          </div>

          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
            type="submit"
          />
        </form>
      </div>
    </Modal>
  );
};

export default ContactPopup;

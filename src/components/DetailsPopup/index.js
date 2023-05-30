import React, { useState } from "react";

import Modal from "../UI/Model";

import { AiOutlineClose } from "react-icons/ai";

import { closeDetailsPopup } from "@/src/store/slices/popup";

import { useDispatch, useSelector } from "react-redux";

const DetailsPopup = () => {
  const dispatch = useDispatch();
  const [isToggle, setToggle] = useState(false);
  const detailToggle = useSelector(
    (state) => state.popSlice.detailsPopup.status
  );

  const details = useSelector(
    (state) => state.popSlice.detailsPopup.helperData
  );
  return (
    <Modal
      isOpen={detailToggle}
      parentClasses={" flex justify-center items-center  w-full m-auto"}
    >
      <div class="bg-white flex justify-center items-center rounded-lg shadow-lg h-[350px] w-[80%] sm:w-[40%] lg:w-[30%] relative">
        <div
          onClick={() => {
            dispatch(closeDetailsPopup());
            setToggle(false);
          }}
          className="absolute top-4 right-4 sm:top-7 sm:right-7"
        >
          <AiOutlineClose />
        </div>

        {!isToggle ? (
          <div class="p-6">
            <h2 class="text-xl font-bold mb-4"> Details</h2>
            <dl>
              <div class="mb-4">
                <dt class="font-bold">Name:</dt>
                <dd class="text-gray-800">{details?.firstName}</dd>
              </div>
              <div class="mb-4">
                <dt class="font-bold">Email:</dt>
                <dd class="text-gray-800">{details?.email}</dd>
              </div>
              <div class="mb-4">
                <dt class="font-bold">Message:</dt>
                <dd class="text-gray-800">{details?.message}</dd>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => setToggle(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
                >
                  Conform
                </button>
              </div>
            </dl>
          </div>
        ) : (
          <div className=" flex justify-center items-center">
            <img
              alt="img1"
              src="https://t3.ftcdn.net/jpg/02/91/52/22/360_F_291522205_XkrmS421FjSGTMRdTrqFZPxDY19VxpmL.jpg"
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default DetailsPopup;

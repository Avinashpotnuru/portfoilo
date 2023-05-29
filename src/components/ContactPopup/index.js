import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Modal from "../UI/Model";

import { openContactPopup, closeContactPopup } from "@/src/store/slices/popup";

const ContactPopup = () => {
  const contactToggle = useSelector(
    (state) => state.popSlice.contactPopup.status
  );
  console.log(contactToggle);

  return (
    <Modal
      parentClasses={" flex justify-center items-center  w-full m-auto"}
      isOpen={contactToggle}
    >
      <div className="bg-gray-600 h-96">ContactPopup</div>
    </Modal>
  );
};

export default ContactPopup;

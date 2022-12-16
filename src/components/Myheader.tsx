import React from "react";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa";
import useModal from "../hooks/useModal";
import Navbarmobile from "./Navbarmobile";

const Myheader = () => {
  const { modal, settingModal } = useModal();
  return (
    <div className="flex items-center text-white justify-between bg-gradient-to-b from-cmf_blue h-28 p-10">
      <h1 className="text-7xl">CMF</h1>
      <Navbar></Navbar>
      <FaBars className="md:hidden" size={40} onClick={settingModal} />
      <Navbarmobile modal={modal} settingModal={settingModal} />
    </div>
  );
};

export default Myheader;

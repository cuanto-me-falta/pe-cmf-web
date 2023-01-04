import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Arrow = () => {
  return (
    <div className="absolute top-6 right-6 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
      <AiOutlineRight size={30} />
    </div>
  );
};

export default Arrow;

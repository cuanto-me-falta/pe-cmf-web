import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FC } from "react";
import { navbarmodal } from "../types/types";

const Navbarmobile: FC<navbarmodal> = ({ modal, settingModal }) => {
  return (
    <div
      className={` ${
        modal ? "absolute" : "hidden"
      } top-0 left-0 w-full h-screen bg-gradient-to-b from-cmf_blue grid place-items-center`}
      //   className={`${
      //     modal ? "absolute" : "hidden"
      //   }   w-screen h-full text-black text-center bg-gradient-to-b from-cmf_blue`}
    >
      <div className="absolute top-1 right-1">
        <AiOutlineClose size={40} onClick={settingModal} />
      </div>
      <nav>
        <ul>
          <li className="text-4xl">
            <Link onClick={settingModal} href={"#"}>
              CMF Notas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbarmobile;

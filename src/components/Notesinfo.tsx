import React, { FC } from "react";
import { notesInfo } from "../types/types";
import Acordion from "./Acordion";
import BlueDegrade from "./blueDegrade";

const Notesinfo: FC<notesInfo> = ({ file }) => {
  const progressPercentage = 80;
  const cardstest = {
    subjects: [
      {
        id: 1,
        name: "test1",
        semester: 1,
        ordinal_year: 1,
        grade: 19,
        credit: 4.0,
        status: "aprobado",
      },
      {
        id: 2,
        name: "test2",
        semester: 2,
        ordinal_year: 1,
        grade: 19,
        credit: 4.0,
        status: "aprobado",
      },
      {
        id: 3,
        name: "test3",
        semester: 3,
        ordinal_year: 2,
        grade: 19,
        credit: 4.0,
        status: "desaprobado",
      },
    ],
    total_passed_credits: 210.0,
    total_non_passed_credits: 0,
    mean_grades: 13.327586206896552,
    student: {
      name: "APAZA/TORRES, ALEXANDER RUSVELL",
      grade: "PRE-GRADO",
      school: "CIENCIA DE LA COMPUTACION",
    },
    card_date: "21.08.26 12:09:39",
  };

  return (
    <div className={`${file ? "hidden" : "hidden"}`}>
      {/* <div className="text-center -z-5 grid place-items-center top-28 h-52 w-full absolute bg-gradient-to-b from-cmf_blue to-transparent"></div> */}
      <BlueDegrade />
      <Acordion
        progressPercentage={progressPercentage}
        subjects={cardstest.subjects}
      />
    </div>
  );
};
export default Notesinfo;

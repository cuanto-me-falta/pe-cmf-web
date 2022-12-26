import React, { FC, useEffect } from "react";
import { NoteCard, notesInfo } from "../types/types";
import Acordion from "./Acordion";
import BlueDegrade from "./BlueDegrade";
import { RiArrowUpSLine } from "react-icons/ri";
import { animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";

const Notesinfo: FC<notesInfo> = ({ notes }) => {
  const years = ["1er", "2do", "3ero", "4to", "5to", "6to", "7mo"];
  useEffect(() => {
    // scroll.scrollTo("datos");
    // window.scrollTo(0, 700);
    //550
    if (window.innerWidth > 550) {
      scroller.scrollTo("linkdatos", { duration: 50, offset: -80 });
    } else {
      scroller.scrollTo("linkdatos", { duration: 50, offset: -120 });
    }
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
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
  const notesObject = notes.subjects.reduce(
    (cache, item) => {
      console.log(cache.length);
      if (cache.length === item.ordinal_year) {
        cache[cache.length - 1].push(item);
      } else {
        cache.push([item]);
      }
      return cache;
    },
    [[]] as NoteCard[][]
  );

  console.log(notesObject);
  return (
    <div>
      {/* <div className="text-center -z-5 grid place-items-center top-28 h-52 w-full absolute bg-gradient-to-b from-cmf_blue to-transparent"></div> */}
      <BlueDegrade />

      <div
        className="h-screen grid  place-content-center text-center"
        id="datos"
      >
        <h1 className="text-3xl"> Bienvenido {notes.student.name}</h1>
        <p>El grado de estudio es: {notes.student.grade}</p>
        <p>La escuela en la que se encuentra es: {notes.student.school}</p>
        <p>Los Creditos actuales son: {notes.total_passed_credits} </p>
        <p>Los Creditos faltantes son: {notes.total_non_passed_credits}</p>
        <p>El promedio de todas las notas actuales es: {notes.mean_grades} </p>
        <p>
          La fecha y hora en la que se saco la libreta de notas es:
          {notes.card_date}
        </p>
      </div>
      <div className="flex justify-center" id="linkdatos">
        <div
          className="flex flex-col items-center w-36 cursor-pointer"
          onClick={scrollToTop}
        >
          <RiArrowUpSLine size={20} />
          <p className="text-center">Desliza arriba para ver tus datos</p>
        </div>
      </div>
      <div className="mb-5">
        {notesObject.map((grade, index) => (
          <Acordion subjects={grade} progressPercentage={80} />
        ))}
        <Acordion
          progressPercentage={progressPercentage}
          subjects={notes.subjects}
        />
      </div>
    </div>
  );
};
export default Notesinfo;

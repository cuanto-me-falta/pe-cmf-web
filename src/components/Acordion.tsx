import React, { FC } from "react";
import { accordion } from "../types/types";
import Arrow from "./Arrow";
import NoteCard from "./NoteCard";
import ProgressBar from "./ProgressBar";

const Acordion: FC<accordion> = ({ subjects, progressPercentage }) => {
  return (
    <div className="relative w-full overflow-hidden p-4">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
      />
      <div className="bg-blue-500 h-12 w-full pl-5 flex items-center rounded-t-lg">
        <h1 className="text-lg font-semibold text-white">Primer Año</h1>
      </div>
      {/* progress bar */}
      <ProgressBar progressPercentage={progressPercentage} />
      {/* Arrow */}
      <Arrow />
      {/* Content */}
      <div className="max-h-0 peer-checked:max-h-96 bg-transparent overflow-hidden transition-all duration-500">
        <div className="grid grid-cols-3 gap-5 place-items-center p-4">
          {subjects.map((course) => (
            <NoteCard
              key={course.id}
              id={course.id}
              name={course.name}
              semester={course.semester}
              ordinal_year={course.ordinal_year}
              grade={course.grade}
              credit={course.credit}
              status={course.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acordion;

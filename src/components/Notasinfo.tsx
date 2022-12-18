import React, { FC } from "react";
import { notasInfo } from "../types/types";

const Notasinfo: FC<notasInfo> = ({ file }) => {
  const cardstest = {
    subjects: [
      {
        id: 1,
        name: "test1",
        semester: 1,
        ordinal_year: 1,
        grade: 19,
        credit: 4.0,
      },
      {
        id: 2,
        name: "test2",
        semester: 2,
        ordinal_year: 1,
        grade: 19,
        credit: 4.0,
      },
      {
        id: 3,
        name: "test3",
        semester: 3,
        ordinal_year: 2,
        grade: 19,
        credit: 4.0,
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
    <div className={`${file ? "block" : "hidden"}`}>
      <div>
        <p>{cardstest.student.name}</p> <p>{cardstest.student.grade}</p>
        <p>{cardstest.student.school}</p>
      </div>
      <div>
        {cardstest?.subjects.map((course) => (
          <div key={course.id}>
            <p>{course.id}</p> <p>{course.name}</p>
            <p>{course.semester}</p>
            <p>{course.ordinal_year}</p> <p>{course.grade}</p>
            <p>{course.credit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notasinfo;

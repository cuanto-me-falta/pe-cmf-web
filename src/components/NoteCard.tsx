import React, { FC } from "react";
import { NoteCard } from "../types/types";

const NoteCard: FC<NoteCard> = ({
  id,
  name,
  semester,
  ordinal_year,
  grade,
  credit,
  status,
}) => {
  return (
    <div
      className={`rounded-md text-center text-white w-48 ${
        status === "aprobado" ? "bg-green-600" : "bg-red-500"
      }`}
    >
      <p>Nombre:{name}</p>
      <p>Semestre:{semester}</p>
      <p>Año:{ordinal_year}</p>
      <p>Grado:{grade}</p>
      <p>Credito:{credit}</p>
    </div>
  );
};

export default NoteCard;

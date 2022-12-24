import React, { FC, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { dragdropArea, notes } from "../types/types";
import { useNotas } from "./../hooks/useNotas";

const DragArea: FC<dragdropArea> = ({
  file,
  dropFile,
  setNoteData,
  noteData,
}) => {
  const fileTypes = ["PDF"];
  const { data, mutate } = useNotas();
  useEffect(() => {
    setNoteData(data?.data);
  }, [data]);

  return (
    <div
      className={`text-3xl top-0 left-0 w-full ${
        noteData ? "hidden" : "block"
      }`}
    >
      <div className="text-center -z-5 grid place-items-center top-28 h-52 w-full absolute bg-gradient-to-b from-cmf_blue to-transparent">
        <p className="text-white"> Bienvenido a CMF para egresar</p>
      </div>
      <div className=" h-[58rem] px-8 pb-8 ">
        <FileUploader
          hoverTitle={"dropealo aca"}
          types={fileTypes}
          handleChange={(file: any) => dropFile(file)}
          // handleChange={(file: any) => {
          //   return mutate({ file });
          // }}
        >
          <div className="h-full w-full text-4xl text-white flex flex-col items-center justify-center gap-52 border-4 border-dotted border-cmf_blue">
            <p className="text-cmf_blue">Sube tu libreta</p>
          </div>
        </FileUploader>
        <button onClick={() => mutate({ file })}>Apretameeeee</button>
      </div>
    </div>
  );
};

export default DragArea;
//${file ? "hidden" : "block"}

import React, { useState } from "react";

const useDrop = () => {
  const [file, setFile] = useState(null);
  const dropFile = (e: any) => {
    setFile(e);
  };
  return { file, dropFile };
};

export default useDrop;

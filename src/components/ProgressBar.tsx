import React, { FC } from "react";
import { progressBar } from "../types/types";

const ProgressBar: FC<progressBar> = ({ progressPercentage }) => {
  return (
    <div className="h-1 w-full bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${
          progressPercentage < 45
            ? "bg-red-500"
            : progressPercentage < 80
            ? "bg-orange-400"
            : "bg-green-300"
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;

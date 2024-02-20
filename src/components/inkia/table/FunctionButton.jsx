/* eslint-disable react/prop-types */
// import React from "react";
import { cn } from "@/lib/utils";

function FunctionButton({ className, children }) {
  return (
    <button
      className={cn(
        "p-2 rounded-full bg-lime-500/20 hover:bg-lime-500/50 ease-in-out duration-300 text-lime-500 flex items-center justify-center",
        className
      )}
    >
      {children}
    </button>
  );
}

export default FunctionButton;

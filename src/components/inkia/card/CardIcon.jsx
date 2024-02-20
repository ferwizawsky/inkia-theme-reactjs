/* eslint-disable react/prop-types */
// import React from "react";
import { cn } from "@/lib/utils"; // Assuming `cn` is a utility function for classNames

function CardIcon({ className, children }) {
  return (
    <div
      className={cn(
        "w-14 h-14 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CardIcon;

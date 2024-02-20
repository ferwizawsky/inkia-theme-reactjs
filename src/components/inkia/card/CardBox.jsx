/* eslint-disable react/prop-types */
// import React from "react";
import { cn } from "@/lib/utils"; // Assuming `cn` is a utility function for classNames

function CardBox({ className, title, value }) {
  return (
    <div
      className={cn(
        "p-2.5 px-3 rounded-xl bg-amber-500/40 text-xs text-center flex items-center justify-center",
        className
      )}
    >
      <div>
        <div>{title ?? "Total"}</div>
        <div className="font-semibold">{value ?? 0}</div>
      </div>
    </div>
  );
}

export default CardBox;

/* eslint-disable react/prop-types */
// import React from "react";

function CardSide({ headerSlot, titleSlot, valueSlot }) {
  return (
    <div className="p-3 bg-background shadow-lg flex items-center rounded-2xl border border-foreground/10">
      <div className="flex-none">
        <div>{headerSlot}</div>
      </div>
      <div className="grow pl-2 flex items-center flex-wrap">
        <div className="text-xs grow pr-4 font-medium">{titleSlot}</div>
        <div className="flex-none grid grid-cols-2 gap-2">{valueSlot}</div>
      </div>
    </div>
  );
}

export default CardSide;

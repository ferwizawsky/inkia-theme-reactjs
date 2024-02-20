/* eslint-disable react/prop-types */
// import React from "react";

function Paginate({ page, meta, move }) {
  const getClass = (index) => {
    let str = "";
    if (page == index.label) {
      str = "bg-primary text-background border-primary";
    } else {
      str = "border-gray-600 hover:text-primary";
    }
    if (!index.url) {
      str = "hidden";
    }

    if (Number(index.label)) {
      str = str + " w-9 h-9 border mx-1";
    } else {
      str = str + " mx-2 py-4";
    }
    return str;
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4 items-center mt-2 border-gray-700 pt-4">
      <div>
        Showing {meta?.from} to 10 of {meta?.total} entries
      </div>
      <div className="lg:ml-auto mx-auto lg:mr-0 lg:col-span-2">
        <div className="px-4 w-full flex flex-wrap items-center">
          {meta?.links.map((index) => (
            <button
              key={index.label}
              onClick={() => move(index.url.split("=")[1])}
              className={`rounded-md flex justify-center items-center ${getClass(
                index
              )}`}
              dangerouslySetInnerHTML={{ __html: index.label }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Paginate;

import React from "react";

// eslint-disable-next-line react/prop-types
function Cardia({ children }) {
  // Extracting child elements based on the provided slots
  const headerSlot = React.Children.toArray(children).find(
    (child) => child.props.slot === "header"
  );
  const titleSlot = React.Children.toArray(children).find(
    (child) => child.props.slot === "title"
  );
  const valueSlot = React.Children.toArray(children).find(
    (child) => child.props.slot === "value"
  );

  return (
    <div className="p-4 bg-background shadow-lg flex items-center rounded-lg border border-foreground/10">
      <div className="flex-none">
        <div>{headerSlot}</div>
      </div>
      <div className="grow pl-2">
        <div className="text-xs">{titleSlot}</div>
        <div className="text-lg font-bold">{valueSlot}</div>
      </div>
    </div>
  );
}

export default Cardia;

import React from "react";

const Scroll = (props) => {
  //return props.children;
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid blue",
        height: "1000px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

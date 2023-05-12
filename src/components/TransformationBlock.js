import React from "react";

function TransformationBlock(props) {
  return (
    <div className="transformation-block">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default TransformationBlock;

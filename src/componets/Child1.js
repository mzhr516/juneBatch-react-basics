import React from "react";

export const Child1 = (props) => {
  console.log(props);
  const d="hello world"
  return (
    <div>
      <p>
        {props.a} {props.b} {props.c} {d}
      </p>
    </div>
  );
};


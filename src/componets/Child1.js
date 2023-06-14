import React from "react";

export const Child1 = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.a} {props.b} {props.c}
      </p>
    </div>
  );
};


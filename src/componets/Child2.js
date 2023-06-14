import React from "react";

export const Child2 = (props) => {
  console.log(props);

  const num1 = props.num1;
  const num2 = props.num2;
  const result = num1 + num2;
  return (
    <div style={{ backgroundColor: props.bgColor, color: props.txtColor }}>
      <h1>
        the sum of {num1} and {num2} :{" "}
      </h1>
      <h1>total sum {result} </h1>
      <hr></hr>
    </div>
  );
};

import { Fragment } from "react";

const Greeting = (abc) => {
  console.log(abc)
  return (
    <Fragment>
      <h1>hello good morning {abc.name}</h1>
      <p>have a nice {abc.day} </p>
    </Fragment>
  );
};

export default Greeting;

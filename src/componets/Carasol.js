// import "./Carasol.css";

import styleSheet from "./Carasol.module.css";

function Carasol() {
  const style = { color: "pink", backgroundColor: "black" };
  console.log(styleSheet);
  return (
    <div className={styleSheet.mainContainer}>
      <h1
        style={{
          color: "blue",
          backgroundColor: "yellow",
          border: "5px solid black",
        }}
      >
        hello world
      </h1>

      <h1 style={style}>react tutorials</h1>

      
      <h1 className={styleSheet.heading}>hello this is react tutorials </h1>
      <h1 className={styleSheet.h1}>good morning</h1>
    </div>
  );
}

export default Carasol;

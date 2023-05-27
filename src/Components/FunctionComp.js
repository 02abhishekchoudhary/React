import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

const FunctionComp = () => {
  // const [counter, setCounter] = useState({
  //   count1: 0,
  //   count2: 1,
  // });

  // const [counter2, setCounter2] = useState(1);

  // const onIncrement = () => {
  //   setCounter((prevState) => {
  //     console.log(prevState);
  //     return {
  //       ...counter,
  //       count1: prevState.count1 + 1,
  //     };
  //   });
  //   setCounter((prevState) => {
  //     console.log(prevState);
  //     return {
  //       ...counter,
  //       count1: prevState.count1 + 1,
  //     };
  //   });
  // };

  // const onIncrement2 = () => {
  //   setCounter({
  //     ...counter,
  //     count2: counter.count2 + 1,
  //   });
  // };

  return (
    <div>
      {/* {console.log(counter)} */}
      {/* <h1>Function Components in React JS</h1>
      <h2>{counter.count1}</h2>
      <h2>{counter.count2}</h2> */}
      {/* <div>
        <button onClick={() => onIncrement()}>Increment</button>
        <button onClick={() => onIncrement2()}>Increment2</button>
      </div> */}
      <div style={{ marginTop: "20px" }}>
        <ItemDetails name={"XYZ"} email={"xyz@gmail.com"} />
      </div>
    </div>
  );
};

export default FunctionComp;

// Ways of writing the functions in JS
// function xyx() { }

// const xyz = function () { }

// const xyz = () => {}

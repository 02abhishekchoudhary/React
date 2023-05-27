import React, { useEffect, useState } from "react";

const FunctionalLC = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);

  // It will do same as componentDidMount. Called only once after render.
  useEffect(() => {
    console.log("UseEffect called");
  }, [count]);
  // [count] -> It will work as componentDidUpdate. It will called if the dependencies change.

  useEffect(() => {
    console.log("UseEffect2 called");
  }, [count2]);

  // For componentWillUnmount
  useEffect(() => {
    console.log("useEffect3 called");
    return (() => {
      console.log("Unmount");
    });
  },[]);

  return (
    <div>
      {console.log("render")}
      <h2>{count}</h2>
      <h2>{count2}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Inc</button>
        <button onClick={() => setCount2(count2 + 1)}>Inc</button>
      </div>
    </div>
  );
};

export default FunctionalLC;

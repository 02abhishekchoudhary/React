import React, { useCallback, useEffect, useState } from "react";

const UseCallbackComp = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const incrementCount = useCallback((num) => {
    setCount(count+num);
  },[count])

  useEffect(() => {
    console.log("UseEffetct Called");
  },[incrementCount])
  return (
    <div>
      <h3>{number}</h3>
      <h3>{count}</h3>
      <div>
        <button onClick={() => incrementNumber()}>Inc Num</button>
        <button onClick={() => incrementCount(30)}>Inc Count</button>
      </div>
    </div>
  );
};

export default UseCallbackComp;

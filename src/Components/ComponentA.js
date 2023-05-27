import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  // console.log(props);
  // const { setNumber, num } = props;
  return (
    <div>
      ComponentA
      <ComponentB />
      {/* <button onClick={() => setNumber(num + 3)}>Inc</button> */}
    </div>
  );
};

export default ComponentA;

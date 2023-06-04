import React from "react";
import withCounter from "./withCounter";

const HoverComp = (props) => {
  const { count, onIncrement, onDecrement } = props;

  return (
    <div>
      HoverComp Counter
      <br />
      <div onMouseOver={onIncrement} onMouseDown={onDecrement}> {count}</div><br />
    </div>
  );
};

export default withCounter(HoverComp);

import React, { useState } from "react";

const withCounter =
  (WrappedComponent) =>
  ({ name }) => {
    const [count, setCount] = useState(0);

    const onIncrement = () => {
      setCount(count + 1);
    };

    const onDecrement = () => {
      setCount(count - 1);
    };
    return (
      <div>
        <WrappedComponent count={count} onIncrement={onIncrement} onDecrement={onDecrement} name={name} />
      </div>
    );
  };

export default withCounter;

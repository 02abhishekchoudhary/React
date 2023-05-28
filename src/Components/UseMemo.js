import React, { useMemo, useState } from "react";

const slowFunc = (n) => {
  for (let i = 0; i < 1000000000; i++) {
  }
  return n * 2;
};

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(1);

  const twiceOfNum = useMemo(() => {
    return slowFunc(number);
  },[number])

  return (
    <div>
      <h4>{count}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>Inc</button>
        <input type="number" onChange={(e) => setNumber(e.target.value)} value={number} />
        <div>
          {number} *2 = {twiceOfNum}
        </div>
      </div>
    </div>
  );
};

export default UseMemo;

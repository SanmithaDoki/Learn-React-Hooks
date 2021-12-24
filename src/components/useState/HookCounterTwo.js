import React, { useState } from "react";

function HookCounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const onClickIncrementFive = () => {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={onClickIncrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;

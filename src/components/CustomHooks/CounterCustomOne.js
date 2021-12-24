import React from "react";
import useCounter from "../../hooks/useCounter";

function CounterCustomOne() {
  const [count, onIncrement, onDecrement, onReset] = useCounter(0, 1);
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default CounterCustomOne;

import React from "react";
import useCounter from "../../hooks/useCounter";

function CounterCustomTwo() {
  const [count, onIncrement, onDecrement, onReset] = useCounter(10, 10);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default CounterCustomTwo;

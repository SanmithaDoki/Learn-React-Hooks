import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  // it returns newState
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  //   const [newState, dispatch] = useReducer(reducer, initialState); //syntax

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;

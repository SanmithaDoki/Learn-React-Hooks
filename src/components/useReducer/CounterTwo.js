import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (currentState, action) => {
  // it returns newState
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  //   const [newState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>firstCounter - {count.firstCounter}</div>
      <div>secondCounter - {count.secondCounter}</div>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment first counter 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement first Counter 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment first counter 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement first Counter 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment second counter 1
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement second Counter 1
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;

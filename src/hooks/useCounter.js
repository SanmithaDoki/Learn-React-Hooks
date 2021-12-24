import { useState } from "react";

function useCounter(initialValue = 0, value) {
  const [count, setCount] = useState(initialValue);

  const onIncrement = () => {
    setCount(count + value);
  };

  const onDecrement = () => {
    setCount(count - value);
  };

  const onReset = () => {
    setCount(initialValue);
  };

  return [count, onIncrement, onDecrement, onReset];
}
export default useCounter;

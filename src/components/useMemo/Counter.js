import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const onClickCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const onClickCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={onClickCounterOne}>Count one - {counterOne}</button>
        {isEven ? "Even" : "Odd"}
      </div>
      <div>
        <button onClick={onClickCounterTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;

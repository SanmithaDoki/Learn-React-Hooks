import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]); //to call this method only when count updates not state updates then we need to give 2nd argument as count. so when count updates it will be called
  // to call this component always when state updates or renders then no need to give any 2nd argument

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
    </div>
  );
}

export default HookCounterOne;

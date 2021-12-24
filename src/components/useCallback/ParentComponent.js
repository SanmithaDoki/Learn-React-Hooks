import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const onIncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const onIncrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button clickHandler={onIncrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button clickHandler={onIncrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;

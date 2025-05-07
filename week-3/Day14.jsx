// Day 14: Custom Hooks
// Learn: Reusable hooks
// Tasks:
// Create useCounter, useLocalStorage
// Mini Project: Persisted counter app

import useCounter from "./Day14/hooks/useCounter";
import useLocalStorage from "./Day14/hooks/useLocalStorage";

export default function Day14() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Minus</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

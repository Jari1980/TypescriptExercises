
import { useState } from "react";

const Exercise1 = () => {
  const [count, setCount] = useState<number>(0);

  function sub() {
    if(count > 0){
        setCount(count - 1)
    }
  }

  return (
    <div>
      <h1>Exercise 1 - Simple Counter</h1>
      <h3>Goal: Create a counter with increament/and decreament buttons.</h3>
      <h3>Key skills: usestate, Typescript state typing.</h3>
      <br/>
      <h2>Task</h2>
      <h3>Prevent count from goig below 0.</h3>
      <h3>Add a reset button.</h3>
      <br/>
      <div>
        <h1>Solution</h1>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => sub()}>-</button>
        <br/>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Exercise1;

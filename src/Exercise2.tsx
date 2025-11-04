import React from "react";

type GreetingProps = {
  name: string; 
  age: number; //age? would not require a value
};

export function Exercise2({name, age}: GreetingProps) {
  return (
    <div>
      <h1>Exercise 2 - Greeting Component</h1>
      <h3>Goal: Create a reusable component that takes props.</h3>
      <h3>Key skills: Typing props.</h3>
      <br />
      <h2>Task</h2>
      <h3>Make the age prop required.</h3> 
      <h3>Add a message prop with a default value.</h3>
      <br />
      <p>
      Hello, {name}! {age && `You are ${age} years old.`}
    </p>
    </div>
  );
};



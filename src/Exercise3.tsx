import React from "react";
import { useState, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export function Exercise3() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [showLocalStorage, setShowLocalStorage] = useState(false);
  const [savedTodos, setSavedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
    //localStorage.setItem("todos", JSON.stringify(todos));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
    //localStorage.setItem("todos", JSON.stringify(todos));
  };

  function toggleTodo(arr: Todo[], id: number): Todo[] {
    setTodos(
      arr.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    //localStorage.setItem("todos", JSON.stringify(todos));
    return todos;
  }

  const getTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    let todosArray: { id: number; text: string; completed: boolean }[] = [];
    if (savedTodos) {
      todosArray = JSON.parse(savedTodos);
    }
    setSavedTodos(todosArray);
    console.log(todosArray);
    setShowLocalStorage(true);
  };

  return (
    <div>
      <h1>Exercise 3 - Todo List</h1>
      <h3>Goal: useState, typing arrays and event handlers.</h3>
      <h3>Key skills: Typing props.</h3>
      <br />
      <h2>Task</h2>
      <h3>Add a “completed” toggle for todos.</h3>
      <h3>Persist todos to localStorage.</h3>
      <br />
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => removeTodo(t.id)}>❌</button>
            {t.completed === false ? (
              <button onClick={() => toggleTodo(todos, t.id)}>❗</button>
            ) : (
              <button onClick={() => toggleTodo(todos, t.id)}>✔️</button>
            )}
          </li>
        ))}
      </ul>
      <br />
      <button onClick={() => getTodos()}>Get Todos from local storage</button>
      <br />
      {showLocalStorage === true ? 
      <ul>
        {savedTodos.map((t) => (
          <li key={t.id}>
            Name: {t.text}, Id: {t.id}
          </li>
        ))}
      </ul>
      : ""}
    </div>
  );
}

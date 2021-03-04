import React, { useState } from "react";
import FormTodo from "./FormTodo";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <h1 className="text-center mb-4">Todo List</h1>
      <FormTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <div>
            <div>
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

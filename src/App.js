import './App.css';
import React from "react";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="wrapper">
        <h1>React tutorial</h1>
        <TodoList />
    </div>
  );
}

export default App;

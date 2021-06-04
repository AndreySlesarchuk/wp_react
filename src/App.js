import './App.css';
import React from "react";
import TodoList from "./components/Todo/TodoList";

function App() {
    const todos = [
        {id: 1, completed: false, title: "Купить хлеб"},
        {id: 2, completed: false, title: "Купить масло"},
        {id: 3, completed: false, title: "Купить соль"}
    ]

  return (
    <div className="wrapper">
        <h1>React tutorial</h1>
        <TodoList todos={todos}/>
    </div>
  );
}

export default App;

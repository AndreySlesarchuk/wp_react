import './App.css';
import TabGroup from "./components/TabGroup/TabGroup";
import HomePage from "./components/__pages/HomePage/HomePage";
import Cards from "./components/Card/Cards";
import React from "react";

function App() {
  // WP_React
    //<HomePage/>

  return (
    <div className="App">
        <TabGroup/>
        <Cards/>
    </div>
  );
}

export default App;

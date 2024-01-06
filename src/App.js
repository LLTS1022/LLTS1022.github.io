import React from "react";
import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper"; // Import TodoWrapper component

function App() {
  return (
    <div className="App">
      <TodoWrapper /> {/* Render the TodoWrapper component */}
    </div>
  );
}

export default App;

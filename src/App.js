import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <header>
        <h1>react-checklist</h1>
      </header>

      <div className="container">
        <TaskList className="tasklist" />
      </div>
      <footer>
        <p className="footertext">Gjort med React och kärlek</p>
      </footer>
    </div>
  );
}

export default App;

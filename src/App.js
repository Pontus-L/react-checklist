import React, { useState } from "react";
import "./App.css";
import "./App.css";
import TaskList from './components/TaskList';

function App() {

  return (
    <div>
      <header>
        <h1>react-checklist</h1>
      </header>

      <div className="container">
        <p className="hints">Hint: Press tasks to delete them.</p>
        
        <TaskList/>
        
      </div>
    </div>
  );
}

export default App;

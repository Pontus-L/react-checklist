import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [temp, setTemp] = useState("");
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <Button
        as="input"
        type="text"
        className="submitField"
        onChange={e => {
          setTemp(e.target.value);
          console.log(temp);
        }}
        value={temp}
      ></Button>
      <Button
        className="addButton"
        onClick={() => {
          setTasks(tasks => [...tasks, { name: temp, id: number }]);
          setNumber(number + 1);
          setTemp("");
        }}
      >
        Add
      </Button>

      <div className="taskField">
        {tasks.map(task => (
          <a
            key={task.id}
            onClick={() => {
              setTasks(tasks.filter(item => item.id !== task.id));
            }}
          >
            <Task key={task.id}>{task.name}</Task>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;

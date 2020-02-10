import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import "./App.css";
import Task from "./components/Task";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  grid-column: 2;
`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [temp, setTemp] = useState("");
  const [number, setNumber] = useState(0);

  return (
    <div>
      <header>
        <h1>Task Manager</h1>
      </header>

      <div className="container">
        <p className="hints">Hint: Press a task to delete it.</p>
        <Form
          onSubmit={e => {
            e.preventDefault();
            setTasks(tasks => [...tasks, { name: temp, id: number }]);
            setNumber(number + 1);
            setTemp("");
          }}
        >
          <Button
            as="input"
            type="text"
            className="submitField"
            placeholder="Add a task"
            onChange={e => {
              setTemp(e.target.value);
              console.log(temp);
            }}
            value={temp}
          ></Button>
          <Button type="submit" className="addButton">
            Add
          </Button>
        </Form>
        <div className="taskField">
          {tasks.map(task => (
            <a
              key={task.id}
              onClick={() => {
                setTasks(tasks.filter(item => item.id !== task.id));
              }}
            >
              <Task className="task" key={task.id}>{task.name}</Task>
            </a>
          ))}
          {tasksEmpty(tasks)}
        </div>
      </div>
    </div>
  );
}

function tasksEmpty(tasks) {
  if(tasks.length === 0) {
    return <p className="noTasksMessage">You have no tasks, try adding one above!</p>
  }
}

export default App;

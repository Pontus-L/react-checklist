import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';
import Task from './Task';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [temp, setTemp] = useState("");
    const [number, setNumber] = useState(0);

    return(
        <div>
          <div className="inputs">
            <form
              onSubmit={e => {
                e.preventDefault();
                setTasks(tasks => [...tasks, { name: temp, id: number, display: true }]);
                setNumber(number + 1);
                setTemp("");
              }}
            >
              <Input
                type="text"
                className="submitField"
                placeholder="Add a task"
                onChange={(e) => {
                  setTemp(e.target.value);
                }}
                value={temp}
              />
              <Button type="submit" className="addButton">
                ADD
              </Button>
            </form> 
          </div>

          <div className="tasks">
            <h2>Tasks</h2>
            {tasks.map((task) => (
              task.display ? <Task
                key={task.id}
                onClick={() => {
                  setTasks([...tasks, task.display = false])
                }}
              >{task.name}</Task> : null
            ))}
          </div>

          <div className="completedTasks">
            <h2>Completed Tasks</h2>
            {tasks.map((task) => (
              !task.display ? <Task
                key={task.id}
              >{task.name}</Task> : null
            ))}
          </div>
        </div>
    );
}

export default TaskList;
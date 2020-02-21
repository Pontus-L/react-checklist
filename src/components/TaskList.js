import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Task from "./Task";
import TaskNew from "./TaskNew";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-around;
`;

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function onEdit(e, task) {
    setTasks(
      tasks.map(item => {
        return item.id === task.id ? { ...item, name: e.target.value } : item;
      })
    );
  }

  function onComplete(task) {
    setTasks(
      tasks.map(item => {
        return item.id === task.id ? { ...item, display: false } : item;
      })
    );
  }

  function onRemove(task) {
    setTasks(tasks.filter(item => item.id !== task.id));
  }

  return (
    <div>
      <div className="inputs">
        <form
          onSubmit={e => {
            e.preventDefault();
            setTasks(tasks => [
              ...tasks,
              { name: input, id: new Date().getMilliseconds(), display: true }
            ]);
            setInput("");
          }}
        >
          <Input
            type="text"
            className="submitField"
            placeholder="Add a task"
            onChange={e => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <Button type="submit" className="addButton">
            ADD
          </Button>
        </form>
      </div>

      <div className="tasks">
        <h2>Tasks</h2>
        {tasks.map(
          task =>
            task.display && (
              <TaskNew
                key={task.id}
                task={task}
                onEdit={e => onEdit(e, task)}
                onRemove={() => onRemove(task)}
                onComplete={() => onComplete(task)}
              />
            )
        )}
      </div>

      <div className="completedTasks">
        <h2>Completed Tasks</h2>
        {tasks.map(
          task => !task.display && <TaskNew key={task.id} task={task} />
        )}
      </div>
    </div>
  );
}

export default TaskList;

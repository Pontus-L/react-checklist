import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Task from "./Task";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-around;
`;

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [temp, setTemp] = useState("");
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div className="inputs">
        <form
          onSubmit={e => {
            e.preventDefault();
            setTasks(tasks => [
              ...tasks,
              { name: temp, id: number, display: true }
            ]);
            setNumber(number + 1);
            setTemp("");
          }}
        >
          <Input
            type="text"
            className="submitField"
            placeholder="Add a task"
            onChange={e => {
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
        {tasks.map(task =>
          task.display ? (
            <Task key={task.id}>
              <Form
                className="innerTask"
                onSubmit={e => {
                  e.preventDefault();
                  setTasks(
                    tasks.map(item => {
                      return item.id === task.id
                        ? { ...item, display: false }
                        : item;
                    })
                  );
                }}
              >
                <input
                  key={task.id}
                  onChange={e => {
                    setTasks(
                      tasks.map(item => {
                        return item.id === task.id
                          ? { ...item, name: e.target.value }
                          : item;
                      })
                    );
                  }}
                  onKeyPress={e => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                    }
                  }}
                  value={task.name}
                ></input>
                <div className="taskButtons">
                  <Button className="completeButton" type="submit">
                    Complete
                  </Button>
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      setTasks(tasks.filter(item => item.id !== task.id));
                    }}
                    className="removeButton"
                  >
                    Remove
                  </Button>
                </div>
              </Form>
            </Task>
          ) : null
        )}
      </div>

      <div className="completedTasks">
        <h2>Completed Tasks</h2>
        {tasks.map(task =>
          !task.display ? <Task key={task.id}>{task.name}</Task> : null
        )}
      </div>
    </div>
  );
}

export default TaskList;

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Task from "./Task";
import styled from "styled-components";

const TaskElement = styled.div`
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  border-radius: 10px;
`;

function TaskNew({ task, onEdit, onComplete, onRemove }) {
  return (
    <TaskElement key={task.id}>
      <input
        key={task.id}
        id="input-1"
        onChange={e => onEdit(e)}
        value={task.name}
      ></input>
      {task.display && (
        <div className="taskButtons">
          <Button className="completeButton" onClick={() => onComplete()}>
            Complete
          </Button>
          <Button onClick={() => onRemove()} className="removeButton">
            Remove
          </Button>
        </div>
      )}
    </TaskElement>
  );
}

export default TaskNew;

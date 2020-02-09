import styled from "styled-components";

const Task = styled.p`
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  border-radius: 5px;
  transition: all 100ms;

  &:hover {
    background-color: rgb(0, 0, 0, 0.05);
  }
`;

export default Task;

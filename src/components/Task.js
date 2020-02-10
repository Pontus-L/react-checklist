import styled, {keyframes} from "styled-components";
import {fadeIn, fadeOut} from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`
const fadeOutAnimation = keyframes`${fadeOut}`

const Task = styled.p`
  animation: 1s ${fadeInAnimation};
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  border-radius: 10px;
  transition: all 100ms;

  &:hover {
    background-color: rgb(0, 0, 0, 0.05);
  }

  &:actove {
    animation: 1s ${fadeOutAnimation};
  }
`;

export default Task;

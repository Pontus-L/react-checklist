import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem 0;
  text-align: center;
  padding-left: 5vw;
  padding-right: 5vw;
  border-radius: 20px;
  border: 2px solid gray;
  margin: 0.5rem 1rem;
  background: transparent;
  transition: ease-in-out 100ms;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

export default Input;

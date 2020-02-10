import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 0;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
  border: 2px solid gray;
  margin: 0.5rem 1rem;
  background: transparent;
  transition: ease-in-out 100ms;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

export default Button;

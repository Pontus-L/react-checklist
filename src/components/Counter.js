import React, { setState, useState } from "react";
import Button from "./Button";
import styled from "styled-components";

const DisplayCount = styled.a`
  padding: 0.5rem 0;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
  border: 2px solid gray;
  margin: 0.5rem 1rem;
  background-image: linear-gradient(to right, coral, red, coral);
`;

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {props.usage}
      </Button>
      <DisplayCount>{count}</DisplayCount>
    </div>
  );
}

export default Counter;

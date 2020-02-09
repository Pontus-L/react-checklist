import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([]);
  return (
    <div className="container">
      <Button
        className="addCounter"
        onClick={() => {
          setCounters(counters.concat({ id: counters.length + 1, value: 0 }));
        }}
      >
        Add counter
      </Button>

      {counters.map(id => (
        <Counter className="counter" usage="Increment" key={id}></Counter>
      ))}
    </div>
  );
}

export default App;

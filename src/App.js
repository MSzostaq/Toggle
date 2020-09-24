import React, { useState } from "react";
import "./App.css";
import Toggle from "./components/Toggle";
import styled from "styled-components";

const Form = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

function App() {
  const [value, setValue] = useState(true);

  function onValueChange(newValue) {
    setValue(newValue);
  }
  return (
    <div className="App">
      <Form>
        <Toggle value={value} onChange={onValueChange} />
      </Form>
    </div>
  );
}

export default App;

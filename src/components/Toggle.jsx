import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: ${({ isOn }) => (isOn ? "#76bd70" : "#e0e0e0")};
  border-radius: 16px;
  display: flex;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  padding: 4px;
  width: 52px;
  height: 32px;
`;

const Switch = styled.div`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  width: 24px;
  height: 24px;
`;

function Toggle({ value, onChange }) {
  function onButtonClick() {
    onChange(!value);
  }
  return (
    <ToggleButton isOn={value} onClick={onButtonClick}>
      <Switch />
    </ToggleButton>
  );
}

export default Toggle;

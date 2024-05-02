import React from "react";
import { useState } from "react";

const Toggle = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const handleToggle = () => {
    if (buttonToggle == true) {
      setButtonToggle(false);
    } else {
      setButtonToggle(true);
    }
  };

  return (
    <>
      <button onClick={handleToggle}>
        {buttonToggle == true ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default Toggle;

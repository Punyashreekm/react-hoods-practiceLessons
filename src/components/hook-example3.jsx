import React, { useState } from "react";

const Toggle = () => {
  const [toggleOn, setToggleOn] = useState(false);

  const HandleClick = () => {
    setToggleOn("!toggle");
  };
  return (
    <div>
      <button onClick={HandleClick}>{toggleOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default Toggle;

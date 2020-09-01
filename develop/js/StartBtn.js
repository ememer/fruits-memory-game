import React from "react";

const StartBtn = (props) => {
  return (
    <div>
      <button onClick={() => props.func()}>Start</button>
    </div>
  );
};

export default StartBtn;

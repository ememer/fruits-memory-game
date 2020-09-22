import React from "react";

const StartBtn = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Shuffle</button>
    </div>
  );
};

export default StartBtn;

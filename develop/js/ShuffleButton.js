import React from "react";

const ShuffleButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Shuffle</button>
    </div>
  );
};

export default ShuffleButton;

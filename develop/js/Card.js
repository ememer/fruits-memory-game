import React from "react";

const Card = (props) => {
  const { fruit, url } = props.data;

  return (
    <>
      <button className="memory-card" onClick={props.onClick}>
        <img
          className="front"
          data-fruitname={fruit}
          src="images/cards/cover.jpg"
        />
        <img className="back" src={url} />
      </button>
    </>
  );
};

export default Card;

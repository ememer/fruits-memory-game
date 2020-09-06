import React, { Fragment, useState } from "react";

const Card = (props) => {
  const { fruit, url } = props.data;

  return (
    <>
      <button
        data-fruitname={fruit}
        className="memory-card"
        onClick={props.onClick}
      >
        <img className="front" src="images/icons/cover.jpg" />
        <img className="back" src={url} />
      </button>
    </>
  );
};

export default Card;

import React, { useEffect } from "react";

const Table = () => {
  useEffect(() => {
    const selectCards = document.querySelectorAll(".card");
    let hasFlippedCard = false;
    let firstCard, secondCard;

    function flipCard() {
      this.classList.add("test");
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        console.log({ hasFlippedCard, firstCard });
      } else {
        hasFlippedCard = false;
        secondCard = this;
        console.log({ hasFlippedCard, secondCard });

        console.log(firstCard.dataset.fruit);
        console.log(secondCard.dataset.fruit);

        firstCard.dataset.fruit === secondCard.dataset.fruit
          ? console.log("tak")
          : console.log("nie");
      }
    }
    selectCards.forEach((card) => card.addEventListener("click", flipCard));
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 shadow_table">
          <div className="row">
            <div className="col-6 main_table">
              <div className="row card_row">
                <div
                  className="card card_style_left_top"
                  data-fruit="strawberry"
                >
                  1
                </div>
                <div className="card" data-fruit="strawberry">
                  2
                </div>
                <div className="card" data-fruit="pear">
                  3
                </div>
                <div className="card" data-fruit="pear">
                  4
                </div>
                <div className="card" data-fruit="orange">
                  5
                </div>
                <div className="card card_style_right_top" data-fruit="orange">
                  6
                </div>
              </div>
              <div className="row card_row">
                <div className="card" data-fruit="grape">
                  1
                </div>
                <div className="card" data-fruit="grape">
                  2
                </div>
                <div className="card" data-fruit="plum">
                  3
                </div>
                <div className="card" data-fruit="plum">
                  4
                </div>
                <div className="card" data-fruit="banana">
                  5
                </div>
                <div className="card" data-fruit="banana">
                  6
                </div>
              </div>
              <div className="row card_row">
                <div
                  className=" card_style_left_bottom card"
                  data-fruit="raspberry"
                >
                  1
                </div>
                <div className="card" data-fruit="raspberry">
                  2
                </div>
                <div className="card" data-fruit="cherry">
                  3
                </div>
                <div className="card" data-fruit="cherry">
                  4
                </div>
                <div className="card" data-fruit="peach">
                  5
                </div>
                <div
                  className="card card_style_right_bottom"
                  data-fruit="peach"
                >
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;

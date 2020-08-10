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
      } else {
        hasFlippedCard = false;
        secondCard = this;

        if (firstCard.dataset.fruit === secondCard.dataset.fruit) {
          console.log(
            "Pasuje",
            firstCard.dataset.fruit,
            secondCard.dataset.fruit
          );
          firstCard.removeEventListener("click", flipCard);
          secondCard.removeEventListener("click", flipCard);
        } else {
          console.log(
            "Nie pasuje",
            firstCard.dataset.fruit,
            secondCard.dataset.fruit
          );
          setTimeout(() => {
            firstCard.classList.remove("test");
            secondCard.classList.remove("test");
          }, 1000);
        }
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
                <button
                  className="card card_style_left_top"
                  data-fruit="strawberry"
                >
                  1
                </button>
                <button className="card" data-fruit="strawberry">
                  2
                </button>
                <button className="card" data-fruit="pear">
                  3
                </button>
                <button className="card" data-fruit="pear">
                  4
                </button>
                <button className="card" data-fruit="orange">
                  5
                </button>
                <button
                  className="card card_style_right_top"
                  data-fruit="orange"
                >
                  6
                </button>
              </div>
              <div className="row card_row">
                <button className="card" data-fruit="grape">
                  1
                </button>
                <button className="card" data-fruit="grape">
                  2
                </button>
                <button className="card" data-fruit="plum">
                  3
                </button>
                <button className="card" data-fruit="plum">
                  4
                </button>
                <button className="card" data-fruit="banana">
                  5
                </button>
                <button className="card" data-fruit="banana">
                  6
                </button>
              </div>
              <div className="row card_row">
                <button
                  className=" card_style_left_bottom card"
                  data-fruit="raspberry"
                >
                  1
                </button>
                <button className="card" data-fruit="raspberry">
                  2
                </button>
                <button className="card" data-fruit="cherry">
                  3
                </button>
                <button className="card" data-fruit="cherry">
                  4
                </button>
                <button className="card" data-fruit="peach">
                  5
                </button>
                <button
                  className="card card_style_right_bottom"
                  data-fruit="peach"
                >
                  6
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row new_game">
        <div className="btn_bg">
          <button className="btn">START</button>
        </div>
      </div>
    </div>
  );
};
export default Table;

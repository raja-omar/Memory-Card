import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
function Container({ children }) {
  const [score, setScore] = useState(0);
  const [cardOrder, setCardOrder] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  const [clickedCards, setClickedCards] = useState([]);

  //  Shuffle array
  const shuffleCards = () => {
    const shuffleCards = [...cardOrder];

    for (let i = shuffleCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = shuffleCards[randomIndex];
      shuffleCards[randomIndex] = shuffleCards[i];
      shuffleCards[i] = temp;
    }

    setCardOrder(shuffleCards);
  };

  //  Shuffle array on every render
  useEffect(shuffleCards, [score]);

  // Update score and trigger shuffle
  function handleClick(e) {
    const cardText = e.target.textContent;
    setScore(score + 1);
    if (clickedCards.includes(cardText)) {
      setScore(0);
      setClickedCards([]); // Reset clickedCards to an empty array
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, cardText]);
    }
  }

  return (
    <div className="ctn">
      <p>Score: {score}</p>
      {cardOrder.map((id) => (
        <Card key={id} id={id} onClick={handleClick} />
      ))}
    </div>
  );
}

export default Container;

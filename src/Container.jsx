// import React, { useEffect, useState } from "react";
// import Card from "./Card";

// function Container({ children }) {
//   const cardIds = [1, 2, 3, 4, 5];

//   function generateRandomArray() {
//     const originalArray = [1, 2, 3, 4, 5];
//     const shuffledArray = [...originalArray];

//     // Shuffle the array using Fisher-Yates shuffle algorithm
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [
//         shuffledArray[j],
//         shuffledArray[i],
//       ];
//     }

//     return shuffledArray;
//   }

//   // Initial card order
//   const initialCardOrder = generateRandomArray().map((id) => (
//     <Card key={id} id={id} onClick={handleClick} />
//   ));

//   const [score, setScore] = useState(0);
//   //const [cardOrder, setCardOrder] = useState(initialCardOrder);
//   const [clickedCards, setClickedCards] = useState([]);

//   // Shuffle array on every render
//   //useEffect(shuffleArray, [score]);

//   // Shuffle array

//   // const shuffleCards = () => {
//   //   const shuffleCards = [...cardOrder];

//   //   for (let i = shuffleCards.length - 1; i > 0; i--) {
//   //     let randomIndex = Math.floor(Math.random() * (i + 1));
//   //     let temp = shuffleCards[randomIndex];
//   //     shuffleCards[randomIndex] = shuffleCards[i];
//   //     shuffleCards[i] = temp;
//   //   }

//   //   setCardOrder(shuffleCards);
//   // };

//   // Update score and trigger shuffle
//   function handleClick(e) {
//     const cardText = e.target.textContent;
//     setScore(score + 1);
//     if (clickedCards.includes(cardText)) {
//       setScore(0);
//       setClickedCards([]); // Reset clickedCards to an empty array
//     } else {
//       setScore(score + 1);
//       setClickedCards([...clickedCards, cardText]);
//     }
//   }

//   return (
//     <div className="ctn">
//       <p>Score: {score}</p>
//       {initialCardOrder}
//     </div>
//   );
// }

// export default Container;
import React, { useEffect, useState } from "react";
import Card from "./Card";

function Container({ children }) {
  const cardIds = [1, 2, 3, 4, 5];

  // Initial card order
  const initialCardOrder = cardIds.map((id) => (
    <Card key={id} id={id} onClick={handleClick} />
  ));

  const [score, setScore] = useState(0);
  const [cardOrder, setCardOrder] = useState(initialCardOrder);
  const [clickedCards, setClickedCards] = useState([]);

  //   Shuffle array
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

  //   Shuffle array on every render
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
      {cardOrder}
    </div>
  );
}

export default Container;

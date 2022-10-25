import React from "react";

function GameCard({ game, onDeleteGame, onUpdateGame, onDeleteClick }) {
  const { id, title, platform, genre, price} = game;
  console.log(onDeleteClick)
  // function handleDeleteClick() {
  //     fetch(`http://localhost:9292/games/${id}`, {
  //         method: "DELETE",
  //     })
  //     .then((r) => r.json())
  //     .then(() => {
  //         onDeleteGame(game);
  //     });
  // }
  
  return (
  <div>
    <h1>{title}</h1>
    <p>{platform}</p>
    <p>{genre}</p>
    <p>{price}</p>
    <button id="delete-button" onClick={() => onDeleteClick(id)}>
        Delete
    </button>
  </div>
  )
   // handleDeleteClick()
  // GameCard();
  
}

export default GameCard;
import React from "react";

function GameCard({ game, onDeleteGame, onUpdateGame }) {
    const { id, title, platform, genre, price} = game;

    function handleDeleteClick() {
        fetch(`http://localhost:9292/games/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            onDeleteGame(game);
        });
    }


}

export default GameCard
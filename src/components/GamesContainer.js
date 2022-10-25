import React from "react";
import GameCard from "./GameCard"

function GameContainer() {
    return (
        <div id="game-collection">{<GameCard />}</div>
    );
}

export default GameContainer
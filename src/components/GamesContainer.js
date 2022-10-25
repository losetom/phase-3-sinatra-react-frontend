import React from "react";
import GameCard from "./GameCard"

function GameContainer({games, onDeleteClick}) {
    console.log(onDeleteClick)
    return (
        <div id="game-collection">
            {games.map((game) => {
               // console.log(game)
                return <GameCard key={game.id} game={game} onDeleteClick={onDeleteClick}/>
            })}
        </div>
    );
}

export default GameContainer
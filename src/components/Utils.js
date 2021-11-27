import { moveImages, winnerRules } from "./Constants";
import { useState } from "react";
import { moves } from './Constants';

export const getMoveImg = (type, move) => {
    return moveImages[type][move];
}

//create your forceUpdate hook
export const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const getRandomMove = () => {
    let index = getRandomInt(3);
    return moves[index];
}

export const getGameTable = (userMove, compMove) => {

    if (userMove === compMove) {
        return "equality";
    }

    return winnerRules[userMove] === compMove ? "user" : "computer";
}
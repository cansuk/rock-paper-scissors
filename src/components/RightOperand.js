import React, { useState, useEffect } from 'react';
import rightPaper from "../assets/right-paper-circle.png";
import { getMoveImg, getRandomMove } from './Utils';


const RightOperand = ({ compMove, handleSelection }) => {
    handleSelection(compMove);
    return (getMoveImg('right', compMove));

    // return random generated computer selection :
    // const [comp, setComp] = useState(null);

    // useEffect(() => {
    //     setComp(null);

    //     let timeout = setTimeout(() => {
    //         setComp(getMoveImg('right', currentMove))
    //     }, 4000);

    //     return () => {
    //         clearTimeout(timeout);
    //     }
    // }, [currentMove])

    // return (
    //     startMove && comp === null ? <p>
    //         loading...
    //     </p> :
    //         getMoveImg('right', currentMove)
    // );



}

export default RightOperand

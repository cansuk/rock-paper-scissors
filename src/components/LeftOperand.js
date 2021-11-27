import React, { useState, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import leftPaper from "../assets/left-paper-circle.png";
import leftRock from "../assets/left-rock-circle.png";
import leftScissors from "../assets/left-scissors-circle.png";
import { getMoveImg } from './Utils'

const LeftOperand = ({ startMove, currentMove, handleSelection }) => {
    // return user selected image
    let selectedMove = currentMove;

    const handleSelect = (e, type) => {
        e.target.style.border = '3px solid yellow';
        e.target.style.borderRadius = '50px';
        handleSelection(false, type);
    }

    return (
        startMove ? <div>
            <p> Select your move: </p>

            <Row>
                <Col> <img key={leftPaper} src={leftPaper} alt="left-paper" width={80} onClick={(e) => handleSelect(e, 'paper')} /> </Col>
                <Col> <img key={leftRock} src={leftRock} alt="left-rock" width={80} onClick={(e) => handleSelect(e, 'rock')} />  </Col>
                <Col> <img key={leftScissors} src={leftScissors} alt="left-scissors" width={80} onClick={(e) => handleSelect(e, 'scissors')} /> </Col>
            </Row>
        </div> : getMoveImg('left', selectedMove || 'paper')

    );
}

export default LeftOperand;

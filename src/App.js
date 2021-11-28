import React, { useState, useRef } from 'react';
import LeftOperand from "./components/LeftOperand";
import RightOperand from "./components/RightOperand";
// import { MDCRipple } from '@material/ripple';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Timer from "./components/Timer";
import { moves } from './components/Constants';
import { useForceUpdate, getRandomMove, getMoveImg, getWinner } from './components/Utils';
import Loading from './components/Loading';
import GameResult from './components/GameResult';

const App = () => {
  const [compMove, setCompMove] = useState(moves[0]);
  const [userMove, setUserMove] = useState(null);
  const [startMove, setStartMove] = useState(false);
  const forceUpdate = useForceUpdate();

  const handlePlayClick = () => {
    setCompMove(null);
    setCompMove(getRandomMove());
    setUserMove(null);
    setStartMove(true);
    forceUpdate();
  }

  const handleCounterFinished = () => {
    if (startMove && !userMove) {
      alert("Time is up!");
      // setGameTable(<p>Time is up!</p>);
      setStartMove(false);
    }
  }

  return (
    <div>
      <div className="wrapper">
        <div>
          Me<hr />
          <LeftOperand startMove={startMove} currentMove={userMove} handleSelection={(isSelected, selectedMove) => {
            setStartMove(isSelected);
            setUserMove(selectedMove);
            // setGameTable(<>You select {selectedMove}- Computer selected {compMove} </>);
          }} />
        </div>
        <div>Computer<hr />
          {startMove ? <Loading /> : <RightOperand compMove={getRandomMove()} handleSelection={(compMove) => setCompMove(compMove)} />}
        </div>

        {(startMove && <Timer initialSeconds={3} handleCounterFinished={handleCounterFinished} />) || <GameResult winner={getWinner(userMove, compMove)} />}

        <Button onClick={handlePlayClick} className="playBtn" >Play</Button>
      </div>

    </div>

  );
}

export default App;

import React, { useState, useRef } from 'react';
import LeftOperand from "./components/LeftOperand";
import RightOperand from "./components/RightOperand";
// import { MDCRipple } from '@material/ripple';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Timer from "./components/Timer";
import { moves } from './components/Constants';
import { useForceUpdate, getRandomMove, getMoveImg, getGameTable } from './components/Utils';


const App = () => {
  const [compMove, setCompMove] = useState(moves[0]);
  const [userMove, setUserMove] = useState(null);
  const [startMove, setStartMove] = useState(false);
  const forceUpdate = useForceUpdate();
  // const gameTable = <></>;
  // const [GameTable, setGameTable] = useState(<></>);

  const handlePlayClick = () => {
    setCompMove(null);
    setCompMove(getRandomMove());
    setUserMove(null);
    setStartMove(true);
    forceUpdate();
  }

  const handleCounterFinished = () => {
    if (startMove && !userMove) {
      // alert("Time is up!");
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
          {startMove ? "Loading" : <RightOperand compMove={getRandomMove()} handleSelection={(compMove) => setCompMove(compMove)} />}
        </div>

        {(startMove && <Timer initialSeconds={3} handleCounterFinished={handleCounterFinished} />) || getGameTable(userMove, compMove)}

      </div>
      <Button variant="primary" onClick={handlePlayClick}>Play</Button>
    </div >

  );
}

export default App;

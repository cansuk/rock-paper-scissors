import React from 'react';


const GameResult = ({ winner }) => {
    if (winner === "") {
        return <></>
    }

    return (
        <div id="gameResult" >
            {winner === 'user' ? `YOU WON! \u{1F607}` : winner === 'computer' ? `YOU LOST! \u{1F61E}` : 'NOBODY WON \u{1F610}'}
        </div>
    )
}

export default GameResult;

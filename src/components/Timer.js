import React, { useState, useEffect } from 'react'

const Timer = ({ initialSeconds = 0, handleCounterFinished }) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 1) {
                handleCounterFinished();
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {seconds === 0
                ? null
                : <h1> {seconds < 10 ? `0${seconds}` : seconds}</h1>
            }
        </div>
    )
}

export default Timer;
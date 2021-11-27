import leftPaper from "../assets/left-paper-circle.png";
import leftScissors from "../assets/left-scissors-circle.png";
import leftRock from "../assets/left-rock-circle.png";
import rightPaper from "../assets/right-paper-circle.png";
import rightScissors from "../assets/right-scissors-circle.png";
import rightRock from "../assets/right-rock-circle.png";

export const moves = ['paper', 'scissors', 'rock'];

export const moveImages = {
    'left': {
        'paper': <img src={leftPaper} alt="left-paper" width={100} />,
        'scissors': <img src={leftScissors} alt="left-scissors" width={100} />,
        'rock': <img src={leftRock} alt="left-rock" width={100} />
    },
    'right': {
        'paper': <img src={rightPaper} alt="right-paper" width={100} />,
        'scissors': <img src={rightScissors} alt="right-scissors" width={100} />,
        'rock': <img src={rightRock} alt="right-rock" width={100} />
    }

}

export const winnerRules = {
    "paper": "rock",
    "rock": "scissors",
    "scissors": "paper"
}
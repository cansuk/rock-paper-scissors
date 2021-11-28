import { getMoveImg } from './Utils';

const RightOperand = ({ compMove, handleSelection }) => {
    handleSelection(compMove);
    return (getMoveImg('right', compMove));

}

export default RightOperand;

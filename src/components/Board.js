import React from 'react';
import Square from "./Square";

const Board = ({board, handleClick, reset, winner}) => {
    return (
        <div className="board-item">
            <div className="board">

                {board.map((square, index) => (
                    <Square
                        square={square}
                        key={index}
                        id={index}
                        handleClick={handleClick}
                        winner={winner}
                    />
                ))}

                {winner && winner.combination.length > 0 && (
                    <div className={`strike-line strike-${winner.combination.join('-')} ${winner.winner === 'X' ? 'strike-x' : 'strike-o'}`}></div>
                )}
            </div>

            <button className='reset-button' onClick={reset}>Start again</button>
        </div>
    );
};

export default Board;
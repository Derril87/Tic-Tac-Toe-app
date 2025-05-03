import React, {useState, useEffect} from 'react';
import Board from "./Board";
import {combination} from "./combination";
import {GrPowerReset} from "react-icons/gr";

const Game = () => {

    const [board, setBoard] = useState(new Array(9).fill(null));

    const [isXNext, setIsXNext] = useState(true);

    const [countX, setCountX] = useState(0);

    const [countO, setCountO] = useState(0);

    const [hasCounted, setHasCounted] = useState(false);

    const winner = combination(board);

    const resetGame = () => {
        setBoard(new Array(9).fill(null))
        setIsXNext(true)
        setCountX(0)
        setCountO(0)
        setHasCounted(false)
    }

    useEffect(() => {
        if (winner && !hasCounted) {
            if (winner.winner === 'X') {
                setCountX((prev) => prev + 1);
                setHasCounted(true);
            } else if (winner.winner === 'O') {
                setCountO((prev) => prev + 1);
                setHasCounted(true);
            }
        }
    }, [winner, hasCounted]);

    useEffect(() => {
        if (!winner) {
            setHasCounted(false);
        }
    }, [board]);

    const finalResult = () => {
        if (winner.winner === 'X') {
            return 'Winner is X'
        } else if (winner.winner === 'O') {
            return 'Winner is O'
        } else {
            return 'Draw'
        }
    }

    const handleClick = (id) => {
        if (winner || board[id]) return;
        const value = isXNext ? 'X' : 'O';
        const addValue = board.map((item, index) =>
            index === id ? value : item
        )
        setBoard(addValue)
        setIsXNext(!isXNext)
    }

    const reset = () => {
        setBoard(new Array(9).fill(null))
        setIsXNext(true)
    }


    return (
        <div className="game">

            <div className="score">
                <p className='p1-win'>X: <b>{countX}</b></p>
                <p className='p2-win'>0: <b>{countO}</b></p>
                <button onClick={resetGame}><GrPowerReset/>sz</button>
            </div>

            <div>
                <Board
                    board={board}
                    handleClick={handleClick}
                    reset={reset}
                    winner={winner}
                />
            </div>

            <p className='winner'>{winner ? finalResult() : null}</p>


        </div>
    );
};

export default Game;
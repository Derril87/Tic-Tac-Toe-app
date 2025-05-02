import React from 'react';

const Square = ({square, handleClick, id}) => {


    return (
        <div className="square">

            <button onClick={() => handleClick(id)}>{square}</button>

        </div>
    );
};

export default Square;
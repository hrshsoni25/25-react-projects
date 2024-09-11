import React, { useEffect, useState } from 'react';

function Square({ value, onClick }) {
  return <div onClick={onClick} className='w-[100px] border h-[100px] bg-green-500 flex justify-center items-center'>{value}</div>;
}

const Tictactoe = () => {
  const [squares, setSquare] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState('');

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;

    cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
    setIsXTurn(!isXTurn);
    setSquare(cpySquares);
  }

  useEffect(() => {
    const winner = getWinner(squares);
    if (!winner && squares.every(item => item !== '')) {
      setStatus('This is a draw');
    } else if (winner) {
      setStatus(`Winner is ${winner}`);
    } else {
      setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]);

  return (
    <div>
      <div className="tContainer w-[300px] mt-2 m-auto bg-red-400 flex">
        <div className="">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <div>{status}</div>
      <button className='block m-auto p-3 bg-yellow-300 mt-2' onClick={() => {
        setSquare(Array(9).fill(''));
        setIsXTurn(true);
        setStatus('');
      }}>Restart</button>
    </div>
  );
};

export default Tictactoe;

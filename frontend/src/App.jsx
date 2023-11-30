import { useState } from 'react';
import './App.css';
import blackKing from '/icons/black-king.svg';
import blackQueen from '/icons/black-queen.svg';
import blackBishop from '/icons/black-bishop.svg';
import blackKnight from '/icons/black-knight.svg';
import blackRook from '/icons/black-rook.svg';
import blackPawn from '/icons/black-pawn.svg';
import whiteKing from '/icons/white-king.svg';
import whiteQueen from '/icons/white-queen.svg';
import whiteBishop from '/icons/white-bishop.svg';
import whiteKnight from '/icons/white-knight.svg';
import whiteRook from '/icons/white-rook.svg';
import whitePawn from '/icons/white-pawn.svg';


// const PIECES = {
//   'king': blackKing,
//   'queen': blackQueen,
//   'bishop': blackBishop,
//   'knight': blackKnight,
//   'rook': blackRook,
//   'pawn': blackPawn,
// }


export default function App() {
  const [grid, setGrid] = useState({
    0: whiteRook,
    1: whiteKnight,
    2: whiteBishop,
    3: whiteQueen,
    4: whiteKing,
    5: whiteBishop,
    6: whiteKnight,
    7: whiteRook,
    56: blackRook,
    57: blackKnight,
    58: blackBishop,
    59: blackQueen,
    60: blackKing,
    61: blackBishop,
    62: blackKnight,
    63: blackRook,
  });

  return (
    <>
      <h1 style={{backgroundColor: 'gray', width: '100%'}}>Hello, World!</h1>

      <div id='board'>
        {[...Array(8 * 8).keys()].map((x) => {
          return (
            <>
              <div className='cell' key={x}>
                { grid[x] && <img src={grid[x]}/> }
              </div>
              { x % 8 === 7 && <div className='cell' hidden></div> }
            </>
          );
        })}
      </div>
    </>
  )
}

import { useState } from 'react'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logics/checkWinner.js'
import {WinnerModal} from './components/Winnermodal.jsx'


function App() {
  const [BOARD, setBOARD] = useState(() => {
    const saveBoard = window.localStorage.getItem('board');
    return saveBoard ? JSON.parse(saveBoard) : Array(9).fill(null);
  })

  const [turn, setTurn] = useState(() => {
    const saveTurn = window.localStorage.getItem('turn');
    return saveTurn ? JSON.parse(saveTurn) : TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  //reset del juego
  const resetGame = () => {
    setBOARD(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  }

  const updateBoard = (index) => {
    if (BOARD[index] || winner) return
    const newBoard = [...BOARD]
    newBoard[index] = turn;
    setBOARD(newBoard)

    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Guardar en local storage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))

    // Verificar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner);
    }else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <section className='game'>
        {
          BOARD.map((square, index) => {
            return (
              <Square 
              key={index} 
              index={index} 
              updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>  
  )
}

export default App;
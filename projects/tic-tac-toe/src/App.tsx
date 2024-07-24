import { useState } from 'react'
import './App.css'
import Square from './components/square'
import WinnerModal from './components/winnerModal'
import '../styles/tictactoe.css'
import { winningCondition, checkEndGame } from './logic/logic'
import { TURNS, EMPTY_BOARD } from './const'
import { endGameOptions, Turns } from './types/types'
import ResetButton from './components/resetButton'

function App() {
  const [board, setBoard] = useState<null[] | string[]>([...EMPTY_BOARD])
  const [turn, setTurn] = useState<Turns>(TURNS.X)
  
  // false: draw
  // object: the winner
  // null: game hasn't finished
  const [isWinning, setIsWinning] = useState<endGameOptions>(null)

  const updateBoard = (index: number) => {
    const newBoard = board
    
    if(!newBoard[index]){
      newBoard[index] = turn
      turn === TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X)
      setBoard(newBoard)
      
      const winner = winningCondition(newBoard)
      if (winner) {
        setIsWinning(winner)
      }else if (checkEndGame(newBoard)){
        setIsWinning(false)
      }
    }
  }

  const resetGame = () => {
    setBoard([...EMPTY_BOARD])
    setIsWinning(null)
    setTurn(TURNS.X)
  }

  return (
    <main>
      <h1>TIC TAC TOE</h1>
      <section className='table'>
        {
          board.map((square, index) => {
            return(
              <Square
                key={index}
                updateBoard={updateBoard}
                index={index}
              >
                {square}
              </Square>  
            )
          })
        }
      </section>
      <ResetButton resetGame={resetGame}>Reset</ResetButton>
      {
        isWinning !== null &&
        <WinnerModal winner={isWinning} resetGame={resetGame}/>
      }
    </main>
  )
}

export default App

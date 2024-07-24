import '../../styles/tictactoe.css'
import ResetButton from './resetButton'

export default function WinnerModal(
  {winner, resetGame}
  :
  {winner: string | false, resetGame: () => void}
){
  return(
    <section className="modal">
      <div className="content">
        <header className="title">
          <h1>{winner ? winner + ' wins' : 'Draw'}</h1>
        </header>
        <footer className="footer">
          <ResetButton resetGame={resetGame}>
            Play Again
          </ResetButton>
        </footer>
      </div>
    </section>
  )
}
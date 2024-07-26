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
        <header className="header">
          <h1 className='title'>¡Ha terminado la partida!</h1>
        </header>
        <p className='description'>{winner ? 'El ganador es: ' + winner : 'Empate'}</p>
        <p className='description'>Gracias por haber jugado, quieres empezar otra partida?</p>
        <footer className="footer">
          <ResetButton resetGame={resetGame}>
            Play Again
          </ResetButton>
        </footer>
      </div>
    </section>
  )
}
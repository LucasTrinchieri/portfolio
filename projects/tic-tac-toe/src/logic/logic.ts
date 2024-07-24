import { WINNER_COMBOS } from '../const'

export const winningCondition = (board: null[] | string[]) => {
  // verify if someone won
  // null --> nobody won yet - sth --> the winner
  for (const combo of WINNER_COMBOS){
    const [a,b,c] = combo

    if (
      board[a] &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      return board[a]
    }
  }

  return null
}

export const checkEndGame = (board: null[] | string[]) => {
  // verify if there is a draw
  // if the board is full
  // true: board full, not winner --> draw
  return board.every(x => x !== null)
}
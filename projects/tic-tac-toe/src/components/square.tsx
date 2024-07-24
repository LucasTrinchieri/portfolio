import { ReactNode } from 'react'
import '../../styles/tictactoe.css'

export default function Square(
  {children, updateBoard, index}
  :
  {
    children: ReactNode, 
    updateBoard: (index: number) => void, 
    index: number
  })
{
  
  const handleClick= () => {
    updateBoard(index)
  }

  return (
    <button 
      className='square'
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
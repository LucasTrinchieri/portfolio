import { ReactNode } from "react"

export default function ResetButton(
  {children, resetGame}
  :
  {children: ReactNode, resetGame: () => void}) {
  return (
    <button className="reset-button" onClick={resetGame}>{children}</button>
  )
}
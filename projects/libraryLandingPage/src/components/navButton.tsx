export default function NavButton(
  {onPageChange}
  :
  {onPageChange : (target: any) => void}
){

  const handlePageChange = ({target} : {target:any}) => {
    onPageChange(target)
  }

  return (
    <section className="navbutton">
      <button className="button" value={-1} onClick={handlePageChange}>Previa</button>
      <button className="button" value={1} onClick={handlePageChange}>Siguiente</button>
    </section>
  )
}
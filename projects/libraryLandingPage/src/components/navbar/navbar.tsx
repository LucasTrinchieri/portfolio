import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "../link";

export default function Navbar(){
  return(
    <section className="navbar">
      <Link to='/' className="icon"><FontAwesomeIcon icon={faHouse}/></Link>
      <p className="name">Libreria los tres libros</p>
    </section>
  )
}
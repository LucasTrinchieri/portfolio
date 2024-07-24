import { ABOUT, FRASES } from "../const/const"

export default function Footer(){
  return (
    <footer className="footer">
      <p>{FRASES.FOOTER.ES}</p>
      <p className="contact">{ABOUT.CONTACT.email}</p>
      <p className="contact">{ABOUT.CONTACT.cellphone}</p>
    </footer>
  )
}
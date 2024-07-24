import { ABOUT } from "../const/const"
import '../styles/personal.css'

export default function PersonalInfo(){
  /* open the links in a new tab allways */
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()  
    const url = event.currentTarget.href
    
    window.open(url, '_blank')
  }

  return (
    <section className='personal'>
      <section className="info">
        <h1 className="title">{ABOUT.NAME}</h1>
        <p className="rol">{ABOUT.ROL.ES}</p>
        <p className="summary">{ABOUT.SUMMARY.ES}</p>
        <a href={ABOUT.LINKS.github.href} onClick={handleClick}>
          <img className="btn-icon" src={ABOUT.LINKS.github.icon} alt={ABOUT.LINKS.github.alt} />
        </a>
        <a href={ABOUT.LINKS.linkedin.href} onClick={handleClick}>
          <img className="btn-icon" src={ABOUT.LINKS.linkedin.icon} alt={ABOUT.LINKS.linkedin.alt} />
        </a>
      </section>
      <section className="ph">
        <img  className="photo" src={ABOUT.PHOTO} alt={ABOUT.NAME + ' photo'} />
      </section>
    </section>
  )
}
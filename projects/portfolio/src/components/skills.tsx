import { ABOUT, TITLES } from "../const/const"
import '../styles/skills.css'

export default function Skills() {
  return (
    <>
      <h1 className="section-title">{TITLES.SKILLS.ES}</h1>
      <section className="skills">
        {
          ABOUT.SKILLS.map((skill, index) => {
            return (
              <div className="skill" key={index}>
                <img className="icon" src={skill.icon} alt={skill.name} />
                {skill.name}
              </div>
            )
          })
        }
      </section>
      <h1 className="section-title">{TITLES.SOFT_SKILLS.ES}</h1>
      <section className="soft-skills">
        {
          ABOUT.SOFT_SKILLS.map((skill, index) => {
            return (
              <div className="skill" key={index}>
                {skill.ES}
              </div>
            )
          })
        }
      </section>
    </>
  )
}
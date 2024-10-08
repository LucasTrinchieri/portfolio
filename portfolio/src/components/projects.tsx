import '../styles/projects.css'

import { projects } from "../configs/projects"
import { FRASES, TITLES } from '../const/const'
import { handleAnchorClick, handleButtonClick } from '../utils/utils'

export default function Projects(){
  return (
    <>
      <h1 className="section-title">{TITLES.PROJECTS.ES}</h1>
      <section className="projects">
        {
          projects.map((project, index) => {
            return (
              <button 
                className="project"
                key={index}
                onClick={() => handleButtonClick(project.links.web)}
              >
                <img className="image" src={project.links.img} alt={project.name} />
                <h1 className="name">{project.name}</h1>
                <p className="description">{project.description.es}</p>
                <section className="technologies">
                  {
                    project.technologies.map((tech, index) => {
                      return (
                        <div className='tech' key={index}>
                          {tech}
                        </div>
                      )
                    })
                  }
                </section>
                <a className="github" href={project.links.github} onClick={handleAnchorClick}>
                  {FRASES.ANCHOR.ES}
                </a>
              </button>
            )
          })
        }
      </section>
    </>
  )
}
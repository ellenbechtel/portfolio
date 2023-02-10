import uniqid from 'uniqid'
import { projects, smallProjects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ProjectContainerSmall from '../ProjectContainer/ProjectContainerSmall'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Featured Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>

      <h2 className='section__title'>Other Projects</h2>
      <div className='projects__grid'>
        {smallProjects.map((project) => (
          <ProjectContainerSmall key={uniqid()} project={project} />
        ))}

      </div>
    </section>
  )
}

export default Projects

import uniqid from 'uniqid'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (

  <Link to={project.routeName}>
    <div className='project'>
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <img className="project__image" src={process.env.PUBLIC_URL + project.imageSrc} alt={project.imageAlt}  />

      {project.routeName && ( // change to a link to direct to the page
  
          <a href={`${process.env.PUBLIC_URL}/CaseStudy1`} rel="noreferrer" target="_blank">
            <span type='button' className='btn btn--outline'>
              Read Case Study
            </span>

          </a>
      
      )}

    </div>
  </Link>
)

export default ProjectContainer

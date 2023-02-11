import uniqid from 'uniqid'
import Tooltip from '@mui/material/Tooltip';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { Link } from "react-router-dom";
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (

  // <a href={project.routeName}>
  <div className='project featured'>
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

    <img className="project__image" src={process.env.PUBLIC_URL + project.imageSrc} alt={project.imageAlt} />

    <p className='project__longdesc'>{project.longdesc}</p>

    {project.url && ( // change to a link to direct to the page

      <Tooltip title={project.tooltip} placement="top">
        <a href={`${project.url}/`}>
          <span type='button' className='btn btn--outline btn--disabled'>
            View Live
          </span>

        </a>
      </Tooltip>
    )}



  </div>
  // </a>
)

export default ProjectContainer

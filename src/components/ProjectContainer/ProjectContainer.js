import uniqid from 'uniqid'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'


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

      <img src={process.env.PUBLIC_URL + project.imageSrc} alt={project.imageAlt} width="100%" height="auto" />

      {project.routeName && ( // change to a link to direct to the page
        <Link to={project.routeName}>
          <a href={project.sourceCode} rel="noreferrer" target="_blank">
            <span type='button' className='btn btn--outline'>
              Read Case Study
            </span>

          </a>
        </Link>
      )}


{/* 
      <div className='btn-group'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
        )}
      </div> */}

    </div>
  </Link>
)

export default ProjectContainer

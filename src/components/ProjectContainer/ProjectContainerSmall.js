import uniqid from 'uniqid'
// eslint-disable-next-line import/no-extraneous-dependencies
import Tooltip from '@mui/material/Tooltip';
// import LaunchIcon from '@material-ui/icons/Launch'
import TwitterIcon from '@material-ui/icons/Twitter'
import './ProjectContainer.css'

const ProjectContainerSmall
  = ({ project }) => 

      <Tooltip title={project.tooltip} placement="top">
        {
          project.livePreview &&
          (
            <a
              href={project.livePreview}
              // href="https://labs.waterdata.usgs.gov/visualizations/vizlab-home/index.html#/"
              aria-label='live preview'
            
              rel="noreferrer" target="_blank"
            >
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

                <img className="project__image" src={process.env.PUBLIC_URL + project.imageSrc} alt={project.imageAlt} />


                <div className='btn-group'>
                  {project.tweet && ( // these aren't working
                    <a
                      href={project.tweet}
                      aria-label='tweet'
                      className='link link--icon'
                    >
                      <TwitterIcon />
                    </a>
                  )}

                </div>

              </div>
            </a>
          )
        }
      </Tooltip>

    
export default ProjectContainerSmall


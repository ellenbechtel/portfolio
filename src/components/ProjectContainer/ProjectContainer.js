/* eslint-disable import/no-extraneous-dependencies */
import uniqid from 'uniqid'
import Tooltip from '@mui/material/Tooltip';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Swiper from '../Swiper/Swiper'


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

    {/* <img className="project__image" src={process.env.PUBLIC_URL + project.imageSrc} alt={project.imageAlt} /> */}
    {/* <Swiper project={project.images}/> */}
     
    <Carousel>
        {project.images.map((im) => (
          <div key={uniqid()}>
            <img src={process.env.PUBLIC_URL + im.src} alt={im.alt} />
            <p className="legend">{im.alt}</p>
          </div>
        ))}
    </Carousel>
    <p className='project__longdesc'>{project.longdesc}</p>

    {project.caveat && (
      <p className='project__longdesc'><span className="highlight italic">{project.caveat}</span></p>
    )}
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

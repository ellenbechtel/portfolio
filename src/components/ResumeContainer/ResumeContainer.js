import uniqid from 'uniqid'
// import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

import './ResumeContainer.css'

const ResumeContainer = ({ item }) => (

  <div className='item'>
    <h3>{item.name}</h3>
    <h6 className='company'>{item.company}</h6>

    <p className='item__description'>{item.description}</p>
    {item.stack && (
      <ul className='item__stack'>
        {item.stack.map((ite) => (
          <li key={uniqid()} className='item__stack-item'>
            {ite}
          </li>
        ))}
      </ul>
    )}

    {/* <img src={item.imageSrc} alt={item.imageAlt} width="100%" height="auto" /> */}

    
    {item.livePreview && (
      <a
        href={item.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ResumeContainer

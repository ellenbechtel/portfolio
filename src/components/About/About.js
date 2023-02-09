import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LaunchIcon from '@material-ui/icons/Launch'
import { about } from '../../portfolio'
import pdf from '../../assets/EMB-Resume.pdf'

import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I&apos;m <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>I&apos;m a {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
      
        {resume && (
          <a href={pdf} rel="noreferrer" target="_blank">
            <span type='button' className='btn btn--outline'>
              open resume   
              <LaunchIcon id="launch-btn" fontSize="small" />
            </span>
            
          </a>
        )}

        {social && (
          <>
          {social.observable && (
              <a
                href={social.observable}
                aria-label='github'
                className='link link--icon'
              >
                <CodeIcon />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About

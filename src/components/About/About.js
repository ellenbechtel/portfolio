import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

// eslint-disable-next-line import/no-extraneous-dependencies
import Tooltip from '@mui/material/Tooltip';
import { about } from '../../portfolio'



import './About.css'

const About = () => {
  const { name, role, description, social } = about

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
        {social && (
          <>
          <Tooltip title="Observable" placement="top">
            {social.observable && (
              <a
                href={social.observable}
                aria-label='github'
                className='link link--icon'
              >
                <CodeIcon />
              </a>
            )}
</Tooltip>

            <Tooltip title="Github" placement="top">
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}
            </Tooltip>

            <Tooltip title="LinkedIn" placement="top">
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            </Tooltip>
            <Tooltip title="Twitter" placement="top">
            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <TwitterIcon />
              </a>
            )}
            </Tooltip>







            
          </>
        )}
      </div>
    </div>
  )
}

export default About

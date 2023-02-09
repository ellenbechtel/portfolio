import uniqid from 'uniqid'
// eslint-disable-next-line import/no-extraneous-dependencies
import Tooltip from '@mui/material/Tooltip';
import { resumeItems } from '../../portfolio'
import ResumeContainer from '../ResumeContainer/ResumeContainer'
import './Resume.css'
import pdf from '../../assets/EMB-Resume.pdf'

const Resume = () => {
  if (!resumeItems.length) return null

  return (
    <section id='resume' className='section resume'>
      <h2 className='section__title'>Resume</h2>


      <div className='about__contact center'>

      <Tooltip title="Open in a new tab" placement="top">
        {pdf && (
          <a href={pdf} rel="noreferrer" target="_blank">
            <span type='button' className='btn btn--outline'>
              open resume
              
            </span>
          </a>
        )}
        </Tooltip>
      </div>
      <div className='resume__grid'>
        {resumeItems.map((item) => (
          <ResumeContainer key={uniqid()} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Resume

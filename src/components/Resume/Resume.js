import uniqid from 'uniqid'
import { resumeItems } from '../../portfolio'
import ResumeContainer from '../ResumeContainer/ResumeContainer'
import './Resume.css'

const Resume = () => {
  if (!resumeItems.length) return null

  return (
    <section id='resume' className='section resume'>
      <h2 className='section__title'>Resume</h2>

      <div className='resume__grid'>
        {resumeItems.map((item) => (
          <ResumeContainer key={uniqid()} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Resume

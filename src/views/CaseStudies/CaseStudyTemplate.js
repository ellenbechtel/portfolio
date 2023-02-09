import React from 'react'
import uniqid from 'uniqid'

const CaseStudyTemplate = ({ project }) => (


      <div className='casestudy'>
        <h3>{project.name}</h3>
  
        <p className='project__description'>{project.description}</p>
        {/* {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )} */}
  
      </div>

  )
  
  export default CaseStudyTemplate
  
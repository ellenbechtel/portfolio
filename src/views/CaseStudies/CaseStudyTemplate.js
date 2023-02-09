import React from 'react'
// import uniqid from 'uniqid'
import './CaseStudy.css'

const CaseStudyTemplate = ({ project }) => (


  <div className='study center'>
    {project.name && (
      <h1 className='study__name'>
        {project.name}
      </h1>
    )}


    <p className='project__description'>{project.description}</p>


  </div>

)

export default CaseStudyTemplate

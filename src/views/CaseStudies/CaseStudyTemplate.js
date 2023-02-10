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


{project.role && <h2 className='study__role'>I was the <span className="highlight">{project.role}</span>.</h2>}
    {project.description && (
      <p className='study__desc'>{project.description}</p>
    )}

<p>Content is in development. </p>


  </div>

)

export default CaseStudyTemplate

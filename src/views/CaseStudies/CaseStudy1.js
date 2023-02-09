import React from 'react'
import uniqid from 'uniqid'
import CaseStudyTemplate from './CaseStudyTemplate'
import { projects } from '../../portfolio'

const CaseStudy1 = () => {
    if (!projects.length) return null

    return (
        <div>
            <h1>This is the about page</h1>
            <CaseStudyTemplate  key={uniqid()} project={projects[0]}  />
        </div>
    )
}

export default CaseStudy1
import React from 'react'
import CaseStudyTemplate from './CaseStudyTemplate'
import { projects } from '../../portfolio'

const CaseStudy1 = () => {
    if (!projects.length) return null

    return (
        <CaseStudyTemplate  project={projects[0]} />
    )
}

export default CaseStudy1
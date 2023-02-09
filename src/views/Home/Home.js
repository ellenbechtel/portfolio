import React from 'react'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Resume from '../../components/Resume/Resume'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'


function Home() {
    return (

        <main>
            <About />
            <Projects />
            <Resume />
            <Skills />
            <Contact />
        </main>

    )
}

export default Home
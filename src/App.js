// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

import Header from './components/Header/Header'
import Home from './views/Home/Home'
import CaseStudy1 from './views/CaseStudies/CaseStudy1'
import CaseStudy2 from './views/CaseStudies/CaseStudy2'
import CaseStudy3 from './views/CaseStudies/CaseStudy3'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="casestudy1" element={ <CaseStudy1/> } />
        <Route path="casestudy2" element={ <CaseStudy2/> } />
        <Route path="casestudy3" element={ <CaseStudy3/> } />
      </Routes>
      

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

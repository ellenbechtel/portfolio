// eslint-disable-next-line import/no-extraneous-dependencies
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

import Header from './components/Header/Header'
import Home from './views/Home/Home'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <Home />

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

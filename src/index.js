import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
// import { HashRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)

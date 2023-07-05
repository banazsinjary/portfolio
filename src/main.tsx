import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './assets/components/NavBar.tsx'
import Landing from './assets/components/Landing.tsx'
import AboutMe from './assets/components/AboutMe.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar></NavBar>
    <Landing></Landing>
    <AboutMe></AboutMe>
  </React.StrictMode>,
)

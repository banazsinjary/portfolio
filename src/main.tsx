import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './assets/components/NavBar.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar></NavBar>
  </React.StrictMode>,
)

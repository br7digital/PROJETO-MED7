import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppB from './AppB.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppB />
  </StrictMode>,
)

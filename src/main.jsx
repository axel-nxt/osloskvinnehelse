import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

// Auto-update every 60 minutes
registerSW({
  onRegistered(r) {
    r && setInterval(() => {
      r.update()
    }, 60 * 60 * 1000)
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

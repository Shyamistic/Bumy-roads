import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignalRunApp from './signal-run/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignalRunApp />
  </StrictMode>,
)

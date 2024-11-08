import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter 
      future={{ 
        startTransition: true,        // Opt-in to `startTransition` behavior
        relativeSplatPath: true       // Opt-in to new relative splat path resolution
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
)

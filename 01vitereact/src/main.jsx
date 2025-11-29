import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Apple () {
   return (
    <h1>Chai aur code !!!</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

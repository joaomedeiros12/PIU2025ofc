import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Listar from './componentes/Carros.jsx'
import Contador from './componentes/Contador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Listar />
    <Contador />
  </StrictMode>,
)

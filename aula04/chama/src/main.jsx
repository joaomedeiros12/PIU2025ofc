import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChangeTheme from './componentes/ChangeTheme.jsx'
import ListarProdutos from './componentes/ListarProdutos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ChangeTheme />
    <ListarProdutos />
  </StrictMode>,
)

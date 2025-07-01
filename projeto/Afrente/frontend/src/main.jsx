import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './home/index.css'
import App from './home/App.jsx'
import MainRoutes from './mainRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <MainRoutes />
  </StrictMode>,
)

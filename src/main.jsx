import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppRouter } from './components/routers/AppRouter.jsx'
import { CartDataProvider } from './store/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartDataProvider>
    <AppRouter/>
    </CartDataProvider>
   
  </StrictMode>,
)

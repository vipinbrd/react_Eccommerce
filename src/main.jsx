import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppRouter } from './components/routers/AppRouter.jsx'
import { CartDataProvider } from './store/CartContext.jsx'
import { AuthContext } from './store/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
    <CartDataProvider>
    <AppRouter/>
    </CartDataProvider>
    </AuthContext>
  </StrictMode>,
)

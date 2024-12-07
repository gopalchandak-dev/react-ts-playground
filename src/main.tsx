import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import MyProvider from './context/Context.tsx'
import MyCountProvider from './context/CountContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyProvider>
      <MyCountProvider>
        <App />
      </MyCountProvider>
    </MyProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WikiApp from './WikiApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WikiApp />
  </StrictMode>
)

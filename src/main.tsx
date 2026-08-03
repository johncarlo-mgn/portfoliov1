import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "react-github-calendar/tooltips.css";
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/portfoliov1">
      <App />
    </BrowserRouter>
  </StrictMode>,
)

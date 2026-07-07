import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function enableMocks() {
  if (import.meta.env.DEV && import.meta.env.VITE_USE_MOCKS !== 'false') {
    const { worker } = await import('./mocks/browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}

function renderApp() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

enableMocks()
  .catch((error) => {
    console.warn('MSW failed to start:', error)
  })
  .finally(() => {
    renderApp()
  })

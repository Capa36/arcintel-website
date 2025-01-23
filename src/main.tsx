import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

const root = createRoot(rootElement)

root.render(
  <HashRouter>
    <App />
  </HashRouter>
) 
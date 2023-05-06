import './index.css'

import { createRoot } from 'react-dom/client'

import App from './App'
import { ThemeProvider } from './contexts/theme'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <ThemeProvider>
    <App tab='home' />
  </ThemeProvider>
)

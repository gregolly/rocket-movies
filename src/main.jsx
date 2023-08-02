import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.jsx'
import Globalstyles from './styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyles />

      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

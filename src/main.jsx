import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme.jsx'
import Globalstyles from './styles/global'

import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './hooks/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <AuthProvider>
        <App />
       </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

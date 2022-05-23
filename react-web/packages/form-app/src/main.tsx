import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { FormDataProvider } from './providers'
import { GlobalStyles } from './styles/global'
import { CSSReset } from './styles/resetCSS'
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <FormDataProvider>
          <App />
        </FormDataProvider>
        <CSSReset />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

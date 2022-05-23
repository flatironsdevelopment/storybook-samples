import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-family: ${theme.font.primary};
      font-size: 400;
      background-color: ${theme.colors.background};
    }

    #root {
      height: 100vh;
    }

    .icon_down_dir:before {
      content: '';
    }

    #search_input::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  `}
`

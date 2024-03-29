import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        html, body, button {
            font-family: Arial, Arial, Helvetica, sans-serif;
        }
    
      }

      .container {
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
        padding: 16px;

      }
`

export default GlobalStyle
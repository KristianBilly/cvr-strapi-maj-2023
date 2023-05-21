import { Global, css } from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial',
          sans-serif;
      }
    `}
  />
)

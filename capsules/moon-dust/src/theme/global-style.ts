// TODO: Import and use font from typeface npm package
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Courier New', monospace;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;

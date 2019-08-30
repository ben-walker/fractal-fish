import { createGlobalStyle } from 'styled-components/macro';
import 'typeface-ibm-plex-sans';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'IBM Plex Sans', sans-serif;
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

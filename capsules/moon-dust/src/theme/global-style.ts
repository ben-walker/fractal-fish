import { createGlobalStyle } from 'styled-components/macro';
import 'typeface-ibm-plex-sans';

// TODO: Investigate why fonts look like ass on Windows

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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

import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`




body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul,
li,
h1,
h2,
h3,
p {
    margin: 0;
    padding: 0;
}

ul, ol, li {
  list-style: none;
}



img {
    display: block;
    max-width: 100%;
    height: auto;
    }
`;

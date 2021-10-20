import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

	*, html {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.03em;
  }
`;

export default GlobalStyle;

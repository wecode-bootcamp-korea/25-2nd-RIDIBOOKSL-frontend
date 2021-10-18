import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

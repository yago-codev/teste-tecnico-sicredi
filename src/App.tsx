import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from 'routes';

import { light, GlobalStyles } from 'styles';

export const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  </ThemeProvider>
);

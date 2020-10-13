import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from 'routes';
import { AuthProvider } from 'hooks/AuthContext';

import { light, GlobalStyles } from 'styles';

export const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
    <GlobalStyles />
  </ThemeProvider>
);

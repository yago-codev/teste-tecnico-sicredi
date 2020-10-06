import React from 'react';
import { ThemeProvider } from 'styled-components';

import { light, GlobalStyles } from 'styles';

export const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <h1>App</h1>
    <GlobalStyles />
  </ThemeProvider>
);

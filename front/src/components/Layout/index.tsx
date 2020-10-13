import React from 'react';

import { Aside } from 'components/Aside';
import { Header } from 'components/Header';
import { Content } from 'components/Content';

import { LayoutGrid } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutGrid>
      <Aside />
      <Header />
      <Content>{children}</Content>
    </LayoutGrid>
  );
};

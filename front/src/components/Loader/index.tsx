import React from 'react';

import loaderGif from './assets/gif/loader.gif';

import { LoaderContainer } from './styles'

export const Loader: React.FC = () => (
  <LoaderContainer>
    <img src={loaderGif} alt="Ilustração animada de um dragão voando" />
  </LoaderContainer>
);

import React from 'react';
import { FiBook, FiPlusCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import sicrediLogo from './assets/img/sicredi-logo.png';

import { AsideContainer, AsideButton, AsideLogo } from './styles';

export const Aside: React.FC = () => {
  return (
    <AsideContainer>
      <AsideLogo>
        <div>
          <img src={sicrediLogo} alt="Logo Sicredi" />
        </div>
      </AsideLogo>

      <AsideButton>
        <NavLink exact to={`/dragons` || `/dragon/:id`}>
          <FiBook />
        </NavLink>
      </AsideButton>

      <AsideButton>
        <NavLink exact to="/dragons/create">
          <FiPlusCircle />
        </NavLink>
      </AsideButton>
    </AsideContainer>
  );
};

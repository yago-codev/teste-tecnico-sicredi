import React, { useCallback, useState } from 'react';

import { useAuth } from 'hooks/AuthContext';

import sicrediLogo from './assets/sicredi-logo.png';

import { HeaderContainer, HeaderLeft, HeaderRight } from './styles';

export const Header: React.FC = () => {
  const { logOut } = useAuth();
  const [openUserOptions, setOpenUserOptions] = useState(false);

  const handleClickLogout = useCallback(() => {
    logOut();
  }, [logOut]);

  const handeClickOpenUserOptions = useCallback(() => {
    openUserOptions ? setOpenUserOptions(false) : setOpenUserOptions(true);
  }, [openUserOptions]);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={sicrediLogo} alt="Logo Invillia" />
      </HeaderLeft>

      <HeaderRight>
        <div onClick={handeClickOpenUserOptions}>
          <img
            src="https://api.adorable.io/avatars/149/abott@adorable.png"
            alt="Avatar de usuário"
          />
          {openUserOptions && (
            <div>
              <button onClick={handleClickLogout}>Sair</button>
            </div>
          )}
        </div>
      </HeaderRight>
    </HeaderContainer>
  );
};

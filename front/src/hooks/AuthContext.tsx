import React, { createContext, useCallback, useState, useContext } from 'react';

import { IAuth, createAuth } from 'services/auth';

interface ILogInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: object;
  logIn(credentials: ILogInCredentials): Promise<void>;
  logOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<IAuth>(() => {
    const token = localStorage.getItem('@ui_dragons:token');
    const user = localStorage.getItem('@ui_dragons:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as IAuth;
  });

  const logIn = useCallback(async ({ email, password }) => {
    const { token, user } = (await createAuth(email, password)).data;

    localStorage.setItem('@ui_dragons:token', token);
    localStorage.setItem('@ui_dragons:user', JSON.stringify(user));

    setAuthData({ token, user });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@ui_dragons:token');
    localStorage.removeItem('@ui_dragons:user');

    setAuthData({} as IAuth);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

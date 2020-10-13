import React, { ComponentType } from 'react';
import { RouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from 'hooks/AuthContext';

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dragons' }} />
        );
      }}
      {...rest}
    ></ReactDOMRoute>
  );
};

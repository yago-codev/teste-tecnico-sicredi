import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { DragonDetails, DragonsList, Login, Logon } from 'pages';

import { Route } from './Route';

export const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/logon" />
    <Route exact path="/logon" component={Logon} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dragons" component={DragonsList} isPrivate />
    <Route exact path="/dragons/create" component={DragonDetails} isPrivate />
    <Route exact path="/dragon/:id" component={DragonDetails} isPrivate />
  </Switch>
);

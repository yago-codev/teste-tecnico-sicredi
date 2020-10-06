import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DetailsDragon, ListDragons } from 'pages';

export const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/dragons" />
    <Route exact path="/dragons" component={ListDragons} />
    <Route exact path="/dragon/:id" component={DetailsDragon} />
  </Switch>
);

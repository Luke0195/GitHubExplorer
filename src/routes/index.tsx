import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import RepositoryPage from '../pages/Repository';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route component={DashboardPage} path="/" exact />
        <Route component={RepositoryPage} path="/repository" />
      </Switch>
    </>
  );
};

export default Routes;

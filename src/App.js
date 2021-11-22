import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import Commits from 'pages/Commits';
import Overview from 'pages/Overview';
import ReadMe from 'pages/ReadMe';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="app-body">
        <div className="app-sidebar">
          <SideBar />
        </div>
        <div className="app-content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/readme" />
            </Route>
            <Route path="/readme">
              <ReadMe />
            </Route>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/commits">
              <Commits />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

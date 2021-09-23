// import logo from './logo.svg';
// import './App.css';


import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home';
import DocumentPage from './pages/documentation';
import PremiumPage from './pages/premium'
import DashboardPage from './pages/dashboard';

import './App.css';

import Header from './component/header/header.component';

const App = (props) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/document' component={DocumentPage} />
        <Route path='/premium' component={PremiumPage} />
        <Route path='/dashboard' component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;

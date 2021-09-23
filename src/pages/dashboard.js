import React, { Component } from 'react';

import Main from './main/main';
import SideBar from './sidebar/sidbar';

import './style.css'

const DashboardPage = () => {
  return (
    <div className="flex">
      <SideBar />
      <Main></Main>
    </div>
  );
}


export default DashboardPage;
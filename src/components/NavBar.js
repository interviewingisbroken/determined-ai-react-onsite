import React from 'react';

import logo from 'assets/logo-github.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Git Explorer Logo" />
      <div className="title">Git Explorer</div>
      <div className="picker">
        <label>select repo</label>
        <select>
          <option value="angular/angular.js/">angular/angular.js</option>
          <option value="facebook/react">facebook/react</option>
          <option value="vuejs/vue">vuejs/vue</option>
        </select>
      </div>
    </nav>
  );
};

export default NavBar;

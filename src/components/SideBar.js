import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideBar.scss';

const SideBar = () => {
  return (
    <aside>
      <NavLink to="/overview">Overview</NavLink>
      <NavLink to="/commits">Commits</NavLink>
      <NavLink to="/readme">Read Me</NavLink>
    </aside>
  );
};

export default SideBar;

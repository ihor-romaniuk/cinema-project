import React from "react";
import { NavLink } from "react-router-dom";

import './Nav.scss';

export const Nav = () => (
  <nav className="Nav">
      <ul className="Nav-List">
          <li className="Nav-Item"><NavLink to="/" exact className="Nav-Link">Фильмы</NavLink></li>
          <li className="Nav-Item"><NavLink to="/schedule" className="Nav-Link">Расписание</NavLink></li>
      </ul>
  </nav>
);


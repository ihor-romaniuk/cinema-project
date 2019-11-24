import React from "react";

import './Nav.scss';

export const Nav  = () => (
  <nav className="Nav">
      <ul className="Nav-List">
          <li className="Nav-Item"><a href="/" className="Nav-Link">Link 1</a></li>
          <li className="Nav-Item"><a href="/" className="Nav-Link">Link 2</a></li>
          <li className="Nav-Item"><a href="/" className="Nav-Link">Link 3</a></li>
      </ul>
  </nav>
);

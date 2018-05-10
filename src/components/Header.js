import React from 'react';
import { NavLink } from 'react-router-dom';

// header component that contains a navbar
const Header = () => (
  <nav className="navbar sticky-top navbar-expand-lg navbar-light">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
      <span />
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" activeClassName="is-active" className="nav-link" exact>
            View posts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" activeClassName="is-active" className="nav-link" exact>
            Create new post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="is-active" className="nav-link" exact>
            Contact us
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;

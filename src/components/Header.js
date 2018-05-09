import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>NTC blog</h1>
    <div>
      <NavLink to="/" activeClassName="is-active" exact>View posts</NavLink>
    </div>
    <div>
      <NavLink to="/create" activeClassName="is-active">Create new blog post</NavLink>
    </div>
    <div>
      <NavLink to="/contact" activeClassName="is-active">Contact us</NavLink>
    </div>
  </div>
);

export default Header;

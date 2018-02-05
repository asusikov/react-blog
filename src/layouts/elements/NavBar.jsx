import React from 'react';
import Link from 'elements/Link';

const NavBar = () => (
  <nav className="blue-grey">
    <div className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">React Blog</Link>
        <ul className="right">
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
